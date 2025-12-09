
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { Sparkles, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    age: z.string().min(1, "Age is required"),
    gender: z.enum(["male", "female", "non-binary", "prefer-not-to-say"], {
        required_error: "Please select a gender",
    }),
    place: z.string().min(2, "Place/City is required"),
    college: z.string().min(2, "College/University is required"),
});

const ParticipantPool = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            age: "",
            place: "",
            college: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const response = await fetch("https://api.airtable.com/v0/appv4YroQ7HTGIPp1/tblyr8C7bvSJsb1NU", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${import.meta.env.VITE_AIRTABLE_TOKEN}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fields: {
                        "Name": values.name,
                        "Email": values.email,
                        "Phone": values.phone,
                        "Age": parseInt(values.age, 10),
                        "Gender": values.gender,
                        "City": values.place,
                        "Org": values.college
                    }
                })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error("Airtable error details:", errorData);
                throw new Error(`Error: ${response.status}`);
            }

            setIsSubmitted(true);
            toast.success("Registration successful!");
        } catch (error) {
            console.error("Failed to submit to Airtable:", error);
            toast.error("Failed to register. Please try again.");
        }
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-emerald-50 flex items-center justify-center p-4">
                <Card className="w-full max-w-md border-0 shadow-2xl bg-white/70 backdrop-blur-xl animate-in fade-in zoom-in duration-700 ring-1 ring-white/50">
                    <CardHeader className="text-center space-y-6 pt-12 pb-8">
                        <div className="mx-auto w-20 h-20 bg-gradient-to-tr from-amber-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <CheckCircle2 className="w-10 h-10 text-white" />
                        </div>
                        <div className="space-y-2">
                            <CardTitle className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 to-amber-600">
                                You're In!
                            </CardTitle>
                            <CardDescription className="text-lg text-slate-600 max-w-[80%] mx-auto">
                                Thanks for joining! We'll reach out when we have a study that's a perfect match for you.
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="flex justify-center pb-12">
                        <Button
                            variant="outline"
                            onClick={() => window.location.href = '/'}
                            className="mt-2 border-slate-200 hover:bg-slate-50 hover:text-slate-900 transition-all duration-300 rounded-full px-8 py-6 text-base font-medium"
                        >
                            Back to Home
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-stone-100 via-amber-50 to-emerald-50 flex flex-col items-center justify-center p-4 md:p-8">
            <div className="w-full max-w-lg space-y-8 my-8">
                <div className="text-center space-y-4 animate-in slide-in-from-top duration-700">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 text-emerald-800 text-sm font-semibold shadow-sm mb-6 hover:scale-105 transition-transform cursor-default">
                        <Sparkles className="w-4 h-4 fill-amber-600 text-amber-600" />
                        <span>Join Our Research Community</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800 leading-tight">
                        Help Shape <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-800 to-amber-600">
                            The Future
                        </span>
                    </h1>
                    <p className="text-slate-600 text-lg md:text-xl max-w-sm mx-auto leading-relaxed">
                        Participate in paid studies and contribute to cutting-edge behavioral research.
                    </p>
                </div>

                <Card className="border-0 shadow-2xl bg-white/60 backdrop-blur-xl ring-1 ring-white/60 animate-in slide-in-from-bottom duration-700 delay-100 overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-50 pointer-events-none" />
                    <CardContent className="pt-8 pb-8 px-6 md:px-8 relative">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-slate-700 font-semibold">Full Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Jane Doe"
                                                    className="bg-white/50 border-slate-200/60 focus:bg-white focus:border-amber-300 focus:ring-4 focus:ring-amber-100 transition-all duration-300 h-11"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-slate-700 font-semibold">Email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="jane@example.com"
                                                        type="email"
                                                        className="bg-white/50 border-slate-200/60 focus:bg-white focus:border-amber-300 focus:ring-4 focus:ring-amber-100 transition-all duration-300 h-11"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-slate-700 font-semibold">Phone</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="(555) 123-4567"
                                                        type="tel"
                                                        className="bg-white/50 border-slate-200/60 focus:bg-white focus:border-amber-300 focus:ring-4 focus:ring-amber-100 transition-all duration-300 h-11"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-5">
                                    <FormField
                                        control={form.control}
                                        name="age"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-slate-700 font-semibold">Age</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="24"
                                                        type="number"
                                                        className="bg-white/50 border-slate-200/60 focus:bg-white focus:border-amber-300 focus:ring-4 focus:ring-amber-100 transition-all duration-300 h-11"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="gender"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-slate-700 font-semibold">Gender</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-white/50 border-slate-200/60 focus:bg-white focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 h-11">
                                                            <SelectValue placeholder="Select" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="male">Male</SelectItem>
                                                        <SelectItem value="female">Female</SelectItem>
                                                        <SelectItem value="non-binary">Non-binary</SelectItem>
                                                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="place"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-slate-700 font-semibold">City</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="San Francisco, CA"
                                                    className="bg-white/50 border-slate-200/60 focus:bg-white focus:border-amber-300 focus:ring-4 focus:ring-amber-100 transition-all duration-300 h-11"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="college"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-slate-700 font-semibold">University / Organization</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Stanford University"
                                                    className="bg-white/50 border-slate-200/60 focus:bg-white focus:border-amber-300 focus:ring-4 focus:ring-amber-100 transition-all duration-300 h-11"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    type="submit"
                                    className="w-full h-14 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white rounded-xl mt-4 transform hover:-translate-y-0.5"
                                >
                                    Join Participant Pool
                                </Button>

                                <p className="text-center text-xs text-slate-400 mt-4">
                                    By joining, you agree to our Terms of Service and Privacy Policy.
                                </p>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default ParticipantPool;
