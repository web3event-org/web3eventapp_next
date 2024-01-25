import Header from "@/app/explore/header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col overflow-y-scroll ">
            <Header></Header>
            <div className="flex-grow p-6 md:overflow-y-auto  pt-14 xl:pt-20 ">{children}</div>
            <div className="h-16">
                footer
            </div>
        </div>
    );
}