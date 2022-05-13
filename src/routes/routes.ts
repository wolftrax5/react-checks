import { lazy, LazyExoticComponent } from 'react';
// import { LazyPages1,LazyPages2, LazyPages3 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;
interface Route {
    to:string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name:string;
}

const Lazy1 = lazy(()=> import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPages1'));
const Lazy2 = lazy(()=> import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPages2'));
const Lazy3 = lazy(()=> import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPages3'));

export const routes:Route[] = [
    {
        to:'/lazy1',
        path:'lazy1',
        Component: Lazy1,
        name: 'Lazy-1'
    },
    {
        to:'/lazy2',
        path:'lazy2',
        Component: Lazy2,
        name: 'Lazy-2'
    },
    {
        to:'/lazy3',
        path:'lazy3',
        Component: Lazy3,
        name: 'Lazy-3'
    }
]