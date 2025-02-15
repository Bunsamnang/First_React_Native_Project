import { TypeOf, z } from "zod";

export const signinSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),

  password: z.string().nonempty("Passwod is required"),
});

export const signupSchema = z.object({
  username: z.string().min(3).nonempty(),
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),

  password: z
    .string()
    .nonempty("Password is required")
    .min(8, "Must be at least 8 characters")
    .min(8, "Must be at least 8 characters long") // Enforces minimum length
    .regex(/[A-Z]/, "Must include at least one uppercase letter")
    .regex(/[a-z]/, "Must include at least one lowercase letter")
    .regex(/\d/, "Must include at least one number")
    .regex(
      /[@$!%*?&]/,
      "Must include at least one special character (@$!%*?&)"
    ),
});

export type SignInCredential = z.infer<typeof signinSchema>;
export type SignUpCredential = z.infer<typeof signupSchema>;

