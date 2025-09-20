import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
    return (
        <div className="p-4">
            <h1 className=" text-2xl font-semibold mb-4">
                Our Users
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((user) => (
                    <UserCard key={user.id} {...user} />
                ))}
            </div>
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