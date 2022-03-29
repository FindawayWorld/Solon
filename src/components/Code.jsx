import { useRef, useEffect } from 'react';
import 'highlight.js/styles/atom-one-dark.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import jsx from 'highlight.js/lib/languages/xml';
import js_n from 'highlight.js/lib/languages/json';
import scss from 'highlight.js/lib/languages/scss';
import classNames from 'classnames';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('jsx', jsx);
hljs.registerLanguage('json', js_n);
hljs.registerLanguage('scss', scss);

const Code = ({ code, lang, className = '' }) => {
    const el = useRef();
    useEffect(() => {
        if (code) {
            hljs.highlightElement(el.current);
        }
    }, [code]);
    return (
        <div className={classNames('code-block', className)}>
            <pre>
                <code ref={el} className={`language-${lang}`}>
                    {code}
                </code>
            </pre>
        </div>
    );
};

export default Code;
