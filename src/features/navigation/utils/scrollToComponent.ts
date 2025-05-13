/**
 * Smoothly scrolls to a DOM element by ID.
 * @param componentId - The ID of the component to scroll to.
 */
const scrollToComponent = (componentId: string): void => {
    const element = document.getElementById(componentId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

export default scrollToComponent;
