import * as z from 'zod';

const schema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    username: z.string().min(1, { message: "Username is required" }),
    email: z
        .string()
        .email({ message: "Invalid email address" })
        .min(1, { message: "Email is required" }),
    address: z.object({
        street: z.string().min(1, { message: "Street is required" }),
        suite: z.string().min(1, { message: "Suite is required" }),
        city: z.string().min(1, { message: "City is required" }),
        zipcode: z
            .string()
            .regex(/^\d{5}(?:-\d{4})?$/, { message: "Invalid zipcode format" })
            .min(1, { message: "Zipcode is required" }),
        geo: z.object({
            lat: z
                .string()
                .regex(/^[-+]?\d+(\.\d+)?$/, { message: "Invalid latitude format" }),
            lng: z
                .string()
                .regex(/^[-+]?\d+(\.\d+)?$/, { message: "Invalid longitude format" }),
        }),
    }),
    phone: z
        .string()
        .regex(
            /^\+?[1-9]\d{1,14}(?: x\d+)?$/,
            { message: "Invalid phone number format" }
        )
        .min(1, { message: "Phone is required" }),
    website: z
        .string()
        .url({ message: "Invalid website URL" })
        .min(1, { message: "Website is required" }),
    company: z.object({
        name: z.string().min(1, { message: "Company name is required" }),
        catchPhrase: z
            .string()
            .min(1, { message: "Catchphrase is required" }),
        bs: z.string().min(1, { message: "Business statement is required" }),
    }),
});

export default schema;