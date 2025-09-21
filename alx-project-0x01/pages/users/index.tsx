import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps, UserData } from "@/interfaces";
import UserModal from "@/components/common/UserModal";
import { useState } from "react";

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [user, setUser] = useState<UserData | null>(null);

    const handleAddUser = (newUser: UserData) => {
        setUser({ ...newUser, id: posts.length + 1 });
    };

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-grow p-4">
                <div className="flex justify-between mb-4">
                    <h1 className="text-2xl font-semibold">Our Users</h1>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                        Add User
                    </button>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((user) => (
                        <UserCard key={user.id} {...user} />
                    ))}
                </div>
            </main>
            {isModalOpen && (
                <UserModal
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleAddUser}
                />
            )}
            </div>
    );
};

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const posts = await response.json()

    return {
        props: {
            posts
        }
    }
}
export default Users;