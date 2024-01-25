"use client"
import {Button, Layout} from "antd";

import Image from "next/image";
import {Suspense, useEffect, useState} from "react";
import Loading from "@/app/loading";
import Events from "@/app/explore/layout";
import {redirect} from "next/navigation";
import Getdate from "@/app/explore/getdate";
import Link from 'next/link';
import nextIcon from '@/public/next.svg';

const { Header, Footer, Sider, Content } = Layout;

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(50% - 8px)',
    maxWidth: 'calc(50% - 8px)',
};
const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
};

interface Ilink {
   className: string;
}

const linkIcon = (props:Ilink)=>{
    return (
        <Image src="/next.svg" width={10} height={10} alt={"icon"}></Image>
    )
}




const link = {
    name: "events",
    href: "/explore/events",
    icon: linkIcon
}

export default function Home() {

    const [data, setData] = useState(null)

    useEffect(() => {
        const fc = async () => {
           const  id = (await Getdate({id:32})).data.id;
           setData(id)
        }
        fc();
    }, []);


    const LinkIcon = link.icon

  return (
      <div>
          {/*<Layout style={layoutStyle}>*/}
          {/*    <Header style={headerStyle}>Header</Header>*/}
          {/*    <Content style={contentStyle}>*/}
          {/*        /!*<Events></Events>*!/*/}
          {/*     */}
          {/*    </Content>*/}
          {/*    <Footer style={footerStyle}>Footer</Footer>*/}
          {/*</Layout>*/}


          <Link
              key={link.name}
              href={link.href}
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
          </Link>

          <Suspense  fallback={<Loading />} unstable_expectedLoadTime={1000}>
              <h1  className={`${data?"bg-red":"bg-black"}`}>{data}</h1>
          </Suspense>

      </div>
  );
}
