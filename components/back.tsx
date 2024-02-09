import BaseLinkBox from './linkbox';

function BackLinkBox(props: { href?: string }) {
    const href = props.href || '/';
    return <BaseLinkBox href={href} linkText="&larr; Back" />;
}

export default BackLinkBox;
