import {
    Users,
    GraduationCap,
    Calendar,
    IndianRupee,
} from "lucide-react";

export default function Dashboard() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">
                School Management Dashboard
            </h1>

            <div className="grid md:grid-cols-4 gap-4">
                <div className="border rounded-lg p-5">
                    <Users size={30} />
                    <h2 className="mt-2 font-semibold">Students</h2>
                </div>

                <div className="border rounded-lg p-5">
                    <GraduationCap size={30} />
                    <h2 className="mt-2 font-semibold">Teachers</h2>
                </div>

                <div className="border rounded-lg p-5">
                    <Calendar size={30} />
                    <h2 className="mt-2 font-semibold">Attendance</h2>
                </div>

                <div className="border rounded-lg p-5">
                    <IndianRupee size={30} />
                    <h2 className="mt-2 font-semibold">Fees</h2>
                </div>
            </div>
        </div>
    );
}