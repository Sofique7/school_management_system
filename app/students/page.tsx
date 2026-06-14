export default function StudentsPage() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">
                Students Management
            </h1>

            <div className="border rounded-lg p-6 max-w-2xl">
                <h2 className="text-xl font-semibold mb-4">
                    Add Student
                </h2>

                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Student Name"
                        className="w-full border rounded p-2"
                    />

                    <input
                        type="text"
                        placeholder="Roll Number"
                        className="w-full border rounded p-2"
                    />

                    <input
                        type="text"
                        placeholder="Class"
                        className="w-full border rounded p-2"
                    />

                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full border rounded p-2"
                    />

                    <textarea
                        placeholder="Address"
                        className="w-full border rounded p-2"
                    />

                    <button className="border rounded px-4 py-2">
                        Save Student
                    </button>
                </div>
            </div>
        </div>
    );
}