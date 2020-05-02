import { Properties as CSSProperties } from 'csstype';

export = goober;

export as namespace goober;

declare namespace goober {
    interface StyledFunction {
        // used when creating a styled component from a native HTML element
        <T extends keyof JSX.IntrinsicElements, P extends Object = {}>(tag: T): Tagged<
            JSX.LibraryManagedAttributes<T, JSX.IntrinsicElements[T]> & P
        >;

        <T extends keyof JSX.IntrinsicElements, P extends Object = {}>(tag: T, fwd: any): Tagged<
            JSX.LibraryManagedAttributes<T, JSX.IntrinsicElements[T]> & P & { ref: any }
        >;

        // used to extend other styled components. Inherits props from the extended component
        <PP extends Object = {}, P extends Object = {}>(tag: StyledVNode<PP>): Tagged<PP & P>;

        <PP extends Object = {}, P extends Object = {}>(tag: StyledVNode<PP>, fwd: any): Tagged<
            PP & P & { ref: any }
        >;

        // used when creating a component from a string (html native) but using a non HTML standard
        // component, such as when you want to style web components
        <P extends Object = {}>(tag: string): Tagged<P & Partial<JSX.ElementChildrenAttribute>>;

        <P extends Object = {}>(tag: string, fwd: any): Tagged<
            P & Partial<JSX.ElementChildrenAttribute> & { ref: any }
        >;

        // used to create a styled component from a JSX element (both functional and class-based)
        <T extends JSX.Element | JSX.ElementClass, P extends Object = {}>(tag: T): Tagged<P>;

        <T extends JSX.Element | JSX.ElementClass, P extends Object = {}>(tag: T, ref: any): Tagged<
            P & { ref: any }
        >;
    }

    const styled: StyledFunction;
    function setup<T>(val: T, prefixer?: (key: string, val: any) => string): void;
    function extractCss(): string;
    function glob(
        tag: CSSAttribute | TemplateStringsArray | string,
        ...props: Array<string | number>
    ): void;
    function css(
        tag: CSSAttribute | TemplateStringsArray | string,
        ...props: Array<string | number>
    ): string;
    type StyledVNode<T> = (props: T, ...args: any[]) => any;
    type Tagged<P extends Object = {}> = <PP extends Object = {}>(
        tag:
            | CSSAttribute
            | TemplateStringsArray
            | string
            | ((props: P & PP) => CSSAttribute | string),
        ...props: Array<
            string | number | ((props: P & PP) => CSSAttribute | string | number | undefined)
        >
    ) => StyledVNode<P & PP>;
    interface CSSAttribute extends CSSProperties {
        [key: string]: CSSAttribute | string | number | undefined;
    }
}
