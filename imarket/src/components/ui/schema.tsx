"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <label htmlFor="username" className="text-sm font-medium">
        Username:
      </label>
      <input
        {...form.register("username")}
        id="username"
        className="border border-gray-300 p-2 rounded-md"
      />
      {form.formState.errors.username && (
        <p className="text-red-500 text-sm">{form.formState.errors.username.message}</p>
      )}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Save
      </button>
    </form>
  );
}
