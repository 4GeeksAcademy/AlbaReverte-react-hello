import React from "react";
export default function Jumbotron() {

    return (
        <div className="jumbotron p-4 mb-2 text-dark bg-secondary">
            <h1 className="display-4">A Warm Wellcome!</h1>
            <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sint aliquam suscipit iure amet vel hic blanditiis, ab deserunt, eveniet cumque minus excepturi in natus eum explicabo sed culpa officiis.</p>
            
                <p className="lead p-4">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                </p>
        </div>
    )
}