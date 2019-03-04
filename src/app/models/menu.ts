export interface IChildMenu {
    labeltext: string;
    routerlink: string;
}

export interface IMenu {
    labeltext: string;
    icon: string;
    routerlink: string;
    children: IChildMenu[];
    isdivideLine: boolean;
    dividername: string;
} 