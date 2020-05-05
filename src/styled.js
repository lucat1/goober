import { css } from './css';
import { parse } from './core/parse';

let h;
const setup = (pragma, prefix) => {
    // This one needs to stay in here, so we won't have cyclic dependencies
    parse.p = prefix;

    // These are scope to this context
    h = pragma;
};

/**
 * Styled function
 * @param {String} tag
 */
function styled(tag, fwd) {
    const _ctx = this || {};

    return function wrapper() {
        const _args = arguments;
        function Styled(props, ref) {
            // Grab a shallow copy of the props
            // _ctx.p: is the props sent to the context
            const _props = (_ctx.p = Object.assign({}, props));
            const _previousClassName = _props.className;

            // Set a flag if the current components had a previous className
            // similar to goober. This is the append/prepend flag
            _ctx.o = /\s*go[0-9]+/g.test(_previousClassName);

            // Define the new className
            _props.className =
                css.apply(_ctx, _args) + (_previousClassName ? ' ' + _previousClassName : '');

            if (fwd && ref) {
                _props.ref = ref;
            }

            return h(tag, _props);
        }

        if (process.env.NODE_ENV === 'development') {
            Styled._t = tag._t || tag.displayName || tag;
            Styled.displayName = 'Styled(' + Styled._t + ')';
        }

        return fwd ? fwd(Styled) : Styled;
    };
}

export { styled, setup };
