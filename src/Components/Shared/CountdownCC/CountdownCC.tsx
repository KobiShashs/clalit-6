import { Component } from "react";
import "./CountdownCC.css";
interface CountdownCCProps {
    num: number;
    removeCC: Function;
}
interface CountdownCCState {
    num: number;
    name: string;

}
class CountdownCC extends Component<CountdownCCProps, CountdownCCState> {

    private timerId: any = null; ///*************************************** */
    public constructor(props: CountdownCCProps) {
        super(props);
        this.state = {
            num: props.num,
            name:'Moshe'
        }
    }

    // Mounting ~ Right after first render
    public componentDidMount(): void {
        this.timerId = setInterval(() => { ///*************************************** */
            this.setState(prev => ({ num: prev.num - 1}));
        }, 1000);
    }

    //Updating - on each state change
    public componentDidUpdate(): void {
        if (this.state.num === 0) {
            this.props.removeCC();
        }

    }

    //UnMounting - "do have any last words?"
    public componentWillUnmount(): void {
        clearInterval(this.timerId);  ///*************************************** */
    }

    public render(): JSX.Element {
        return (
            <div className="CountdownCC">
                <h1>CC</h1>
                <h2>{this.state.num}</h2>
                <h2>{this.state.name}</h2>
            </div>
        );
    }
}

export default CountdownCC;
