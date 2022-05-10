import { LazyPages1,LazyPages2, LazyPages3 } from '../01-lazyload/pages';

interface Route {
    to:string;
    path: string;
    Component: () => JSX.Element;
    name:string;
}
export const routes:Route[] = [
    {
        to:'/lazy1',
        path:'lazy1',
        Component: LazyPages1,
        name: 'Lazy-1'
    },
    {
        to:'/lazy2',
        path:'lazy2',
        Component: LazyPages2,
        name: 'Lazy-2'
    },
    {
        to:'/lazy3',
        path:'lazy3',
        Component: LazyPages3,
        name: 'Lazy-3'
    }
]