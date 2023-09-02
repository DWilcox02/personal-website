export default interface PageProps {
    onHover: (isHovering: boolean) => void;
    returnHome: () => void;
    isDesktop: boolean;
}