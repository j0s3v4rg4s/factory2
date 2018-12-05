import * as React from 'react'

export default class extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="cont">
                <div className="data-container">holaa</div>
                <div className="image-container">holaa 2</div>

                {/*language=SCSS*/}
                <style jsx>{`
                    .cont {
                        height: 100vh;
                        overflow: hidden;
                    }
                    .data-container {
                        background: red;
                        width: 50%;
                        height: 100%;
                        display: inline-block;
                    }
                    .image-container {
                        display: inline-block;
                        background: blue;
                        width: 50%;
                        height: 100%;
                    }
                `}</style>
            </div>
        )
    }
}
