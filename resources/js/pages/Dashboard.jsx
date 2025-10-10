import { usePage } from '@inertiajs/react';
import DashboardComponent from '../components/dashboard-component';
import Layout from '../components/layout';

export default function Dashboard() {
    const { props } = usePage();
    const user = props.auth?.user;

    return (
        <Layout user={user} currentPage="dashboard">
            <DashboardComponent />
        </Layout>
    );
}
