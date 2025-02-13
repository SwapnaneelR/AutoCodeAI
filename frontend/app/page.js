import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChatAltIcon, CodeIcon } from "@heroicons/react/outline";

import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen  text-black">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold tracking-tight">
          Automate Your Code Reviews with AI
        </h1>
        <p className="text-xl max-w-lg mx-auto">
          Improve your code quality effortlessly. Let AutoCode AI help you write
          cleaner, more efficient code with smart suggestions and feedback.
        </p>
        <Link href="/review">
          <Button className="bg-green-600 hover:bg-green-700 text-xl font-bold mt-10 p-6">
            Start Reviewing Your Code
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16 text-center">
        {/* Card 1 */}
        <Card className="bg-yellow-200 p-8 rounded-lg shadow-lg max-w-sm mx-auto">
          <h3 className="text-2xl font-semibold mt-4">Smart Feedback</h3>
          <p className="text-gray-600 mt-2">
            Get instant AI-driven insights to improve your code structure,
            readability, and efficiency.
          </p>
        </Card>

        {/* Card 2 */}
        <Card className="bg-pink-200 p-8 rounded-lg shadow-lg max-w-sm mx-auto">
          <h3 className="text-2xl font-semibold mt-4">Code Insights</h3>
          <p className="text-gray-600 mt-2">
            Receive detailed explanations of suggested improvements to help you
            learn and grow as a coder.
          </p>
        </Card>

        {/* Card 3 */}
        <Card className="bg-blue-300 p-8 rounded-lg shadow-lg max-w-sm mx-auto">
          <h3 className="text-2xl font-semibold mt-4">Code Optimization</h3>
          <p className="text-gray-600 mt-2">
            Automatically get suggestions to optimize your code for better
            performance.
          </p>
        </Card>

        {/* Card 4 */}
        <Card className="bg-emerald-300 p-8 rounded-lg shadow-lg max-w-sm mx-auto">
          <h3 className="text-2xl font-semibold mt-4">Error Detection</h3>
          <p className="text-gray-600 mt-2">
            Let AI spot errors and potential bugs in your code so you can fix
            them faster.
          </p>
        </Card>
      </div>
    </main>
  );
};

export default page;
