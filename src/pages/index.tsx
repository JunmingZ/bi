import yayJpg from '../assets/yay.jpg';
import {Button} from 'antd';

export default function HomePage() {
    return (
        <div>
            <Button>测试</Button>
            <h2>Yay! Welcome to umi!</h2>
            <p>
                <img src={yayJpg} width="388"/>
            </p>
            <p>
                To get started, edit <code>pages/index.tsx</code> and save to reload.
            </p>
        </div>
    );
}
