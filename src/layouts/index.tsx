import {Outlet} from 'umi';
import {useTranslation} from "react-i18next";


export default function Layout() {
    const { t } = useTranslation();

    return (
        <>
            {t('global.copy')}
            <Outlet></Outlet>
        </>
    );
}

