
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";


type ActiveLinkProps = {    
    children: React.ReactNode;
} & LinkProps

export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {

    const router = useRouter();
    const isCurrentPath = router.asPath === href || router.asPath == rest.as || router.asPath.startsWith(String(rest.as));

    return(
        <Link href={href} className={cn('text-sm font-medium transition-colors hover:text-blue-500',
         isCurrentPath ? 'text-blue-500' : 'text-muted-foreground' )}>
             {children}</Link>
    )
}