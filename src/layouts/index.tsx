import {Outlet} from 'umi';
import {GlobalStyles} from "@/styles";


export default function Layout() {
    return (
        <>
            <Outlet></Outlet>
            <GlobalStyles></GlobalStyles>
        </>
    );
}

