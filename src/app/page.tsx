"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

function addTask() {
  
}

export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-bl from-sky-200 from-5% via-green-100 to-emerald-300 w-screen min-h-screen">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center text-center">
                  <h1 className="font-semibold text-4xl">To Do List</h1>
                  <p>Enter your tasks here</p>
              </div>
              <div className="flex w-full max-w-sm items-center space-x-3">
                <Input type="text" placeholder="Enter task here" />
                <Button type="submit" formAction={addTask}>Add</Button>
              </div>
              <div className="tasks">

              </div>
          </div>
      </div>
    </main>
  )
}
