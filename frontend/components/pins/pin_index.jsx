import React from 'react';
import { Link } from 'react-router-dom';
import { BeatLoader } from "react-spinners";

class PinIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = { loading: true }
    }

    componentDidMount() {
        this.props.fetchPins(this.props.board).then(this.setState({loading: false}));
    }

    pinCount() {
        if (this.props.pins.length === 1 && this.props.board) {
            return <h1>1 Pin</h1>; 
        } else if (this.props.board) {
            return <h1>{this.props.pins.length} Pins</h1>;
        } else {
            return null;
        }
    }

    capitalize(title) {
        return title.charAt(0).toUpperCase() + title.slice(1);
    }

    render() {

        // if (!this.props.pins){
        //     return null;
        // }
        
        
        let pins = this.props.pins.map(pin => {
            return (
                <Link 
                key={`${pin.id}`} 
                to={`/pins/${pin.id}`}
                className="pin-index__item">
                            <img src={`${pin.image_url}`} alt=""/>
                            <h2>{this.capitalize(pin.title)}</h2>
                    </Link>
            )
        })
            
        return (
            
            <div className="pin-index-con">
                {/* {this.pinCount()} */}
                <ul className='pin-index'>
                    {/* {pins} */}

                    <div className="teal">
                        {/* <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGdyYWZpdHRpJTIwZGFya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt=""/>
                    </div> */}
                        
                        <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1528101759-6c82d7e735e5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZml0dGl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                        
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1553949333-0510da388b82?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVybiUyMGFydCUyMHRlYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1500390365106-166bb67248d6?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1533724411788-69f4eb885fdb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fG1vZGVybiUyMGFydCUyMHRlYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1543097840-fc84594dd9e6?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTE5fDY5OTYzNzg4fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1564324889062-df1710527dd9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE3fHxza3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>

                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1520985244272-9d0b8067a4ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHNreXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1520642197828-b053b701d590?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Njd8Njk5NjM3ODh8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1573765727997-e02883182ba7?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTE0fDY5OTYzNzg4fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1435224654926-ecc9f7fa028c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHN0YXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1581500274180-6331eea8b184?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM5fHxzdGFyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1501445293538-114af2dc0bed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHRlYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1612106466785-93394744e440?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHRlYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        {/* <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1578301977886-43be7b983104?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxwYWludGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div> */}
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1509916849829-d5b32d24dcca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHRlYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1605356607316-c0c71101a80b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHRlYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1591297299673-a620e2546a00?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    {/* <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1545291162-2d98bdd0b1ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                        </div> */}
                    </div>

                    <div className="magenta">
                        
                        <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1533142727438-0ef56e9a66b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGdyYWZpdHRpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    
                        <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1521911589143-88a221d6087c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhZml0dGl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1534946366195-7bf1dfc2fbd1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyYWZpdHRpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                        <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1598130340413-5970fc015d43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVybiUyMGFydCUyMHBpbmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1561835503-648c2f1169d2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fG1vZGVybiUyMGFydCUyMHBpbmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1561046207-3b06bf198d0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fG1vZGVybiUyMGFydCUyMHBpbmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1527698952067-61fc35796fcd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEwfHxtb2Rlcm4lMjBhcnQlMjBwaW5rfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1532614208657-10b8d7815f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1585092043239-ca829f99c3ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFnZW50YXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1560579499-ab30d29dfd9a?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NjJ8Njk5NjM3ODh8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1487235829740-e0ac5a286e1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHN0YXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1605489083576-64db7570f64c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFnZW50YXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1613233629562-cee828d79999?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fG1hZ2VudGF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1549604350-148387bbe4ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI0fHxtYWdlbnRhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                    </div>

                    <div className="gold">
                        
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1581592487771-132f53bd2b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8Njk5NjM3ODh8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1527219002998-9e1b7ebedcb5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvbGR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1602422701241-7ba4f6fc1712?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80" alt=""/>
                        </div> 
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1581592717583-7e2efef84615?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTAwfDY5OTYzNzg4fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        {/* <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1582400145495-214216c4e607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt=""/>
                        </div> */}
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1580714025681-8eb1daa75b40?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mjl8Njk5NjM3ODh8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        
                        {/* <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1504661866147-bd2ea99180e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
                        </div> */}
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1581593439234-92c5bb46f293?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHBhaW50aW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1506804440412-6063bfd52c6b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z29sZCUyMHBhaW50aW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1583829893112-58e651ff8528?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt=""/>
                        </div>
                        
                        {/* <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1598902596843-c8970a7396f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGFsYWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div> */}
                       
                        
                        
                        
                        {/* <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1545291158-82c7c02fd44a?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div> */}
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1611753444111-8ccba735c413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        {/* <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1612643639696-0c788b15bdd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div> */}
                        {/* <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1585749176388-ba155e5fcf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div> */}
                        {/* <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1562576650-27130b06c0ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNodXJjaCUyMHBhaW50aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div> */}
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1600764303720-60c2ee1c7484?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGNodXJjaCUyMHBhaW50aW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        {/* <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1617452171749-fd6b723554bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
                        </div> */}
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1599496287905-d48f26f9e7a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        {/* <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1495722281458-25edbdb08a1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1601369791997-779f1f54914b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNodXJjaCUyMHBhaW50aW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div> */}
                        
                        
                        <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1614211660033-759855c71183?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1614211660130-605ff3bb12c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1577049092145-c8c58b21f33f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHZhbiUyMGdvZ2h8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1596420267212-20126ea23a38?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZCUyMG1vb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                    </div>

                    <div className="light">
                        <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1581840129275-0e54054412a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fG1vZGVybiUyMGFydCUyMHBpbmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                        <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1530483325687-052340bd7ded?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGdyYWZpdHRpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                        <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1581840129767-6dbb9523fb72?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM3fHxtb2Rlcm4lMjBhcnQlMjBwaW5rfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8Njk5NjM3ODh8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
<div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1578301977886-43be7b983104?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxwYWludGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
<div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1578926375605-eaf7559b1458?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTIyfDY5OTYzNzg4fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1569705474611-051bf56f332c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt=""/>
                        </div>
                        
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1587947910798-fb4e9a0452cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHBpbmslMjBza3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1570569977384-be17f90f1a10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw2OTk2Mzc4OHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1605311384272-7a822e75ba43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fHRlYWwlMjBwaW5rfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1533157950006-c38844053d55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxtb2Rlcm4lMjBhcnQlMjBwaW5rfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    </div>

                    <div className="dark">
                         <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1543781363-295b2861bb81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OTN8Njk5NjM3ODh8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1510987836583-e3fb9586c7b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGdyYWZpdHRpJTIwZGFya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt=""/>
                    </div>
                        <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1504685937808-73bee8d6e3ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGdyYWZpdHRpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1601832836543-c7582a412b25?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhZml0dGklMjBkYXJrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1532009855169-b27380bf2d45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1491566102020-21838225c3c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1543781363-6b99f8922dfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1545062990-4a95e8e4b96d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w2OTk2Mzc4OHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1517776832751-0a7e6993de03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1517923505553-0e984c9b1eed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1579783902915-f0b0de2c2eb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1506813561347-cbbdf7b3f520?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTEwfDY5OTYzNzg4fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1524602997322-c1900e093d3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGRhcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1574182245530-967d9b3831af?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OTl8Njk5NjM3ODh8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div> 
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                           <img  src="https://images.unsplash.com/photo-1476370648495-3533f64427a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGJsYWNrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>    
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1545409347-2eaffd7a42c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM1fHxibGFja3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1548607086-e7ef42d18084?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        
                        
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1565910641578-ce79cb7530fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGNodXJjaCUyMHBhaW50aW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1595951472939-77e584cde8f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" alt=""/>
                        </div>
                        <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1526161786553-10e498506370?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGdyYWZpdHRpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1508522802063-da3458d34254?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGdyYWZpdHRpJTIwZGFya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt=""/>
                        </div>
                        
                        <div className="pin-index__item">
                            <img  src="https://images.unsplash.com/photo-1529578168432-30b16c2f66fe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z29sZCUyMG1vb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                        </div>
                        <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1615304001748-fde575b7d968?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmFuJTIwZ29naHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    <div className="pin-index__item">
                        <img  src="https://images.unsplash.com/photo-1493841160601-33a4807cb6de?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmFuJTIwZ29naHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
                    </div>
                    </div>

                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                </ul>  
            </div>
    
        )
    }
}

export default PinIndex;