import * as React from "react"
import LazyObjectView, { RenderOptions } from "lazy-object-view";

export interface ReactLazyObjectViewProps {
    data: any;
    options?: RenderOptions;
}

export default class ReactLazyObjectView extends React.Component<ReactLazyObjectViewProps> {
    renderTargetRef: React.RefObject<HTMLElement>;

    constructor(props: ReactLazyObjectViewProps) {
        super(props);
        this.renderTargetRef = React.createRef<HTMLElement>();
    }

    componentDidMount() {
        const renderEngine = new LazyObjectView();
        const node: HTMLElement | null = this.renderTargetRef.current;
        if (node !== null) {
            renderEngine.render(node, this.props.data, this.props.options);
        }
    }

    render() {
        const renderTarget = React.createElement('div', { ref: this.renderTargetRef });
        return renderTarget;
    }
}
