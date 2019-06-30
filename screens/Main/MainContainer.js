import React from "react";
import MainPresenter from "./MainPresenter";

export default class extends React.Component {
    state = {
        loading: true,
        testArray: null,
        error: null,
        progress: 0,
        indeterminate: true,
        dataSource: null
    };

    async componentDidMount() {
        let error;
        let testArray = new Array("a", "b", "c", "d");


        try {

        } catch (error) {
            console.log(error);
            error = error;
        } finally {
            this.setState({
                loading: false,
                testArray,
                error
            });
        }


        // 인포 카드
        this.animate();

        ///// 갤러리 임시데이터 /////
        let items = Array.apply(null, Array(6)).map((v, i) => {
          return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
        });

        this.setState({
            dataSource: items
        });
    }

    animate() {
        let progress = 0;
        this.setState({ progress });
        setTimeout(() => {
          this.setState({ indeterminate: false });
          setInterval(() => {
            progress += Math.random() / 5;
            if (progress > 1) {
              progress = 1;
            }
            this.setState({ progress });
          }, 500);
        }, 1500);
      }


    // setState 가 실행될때마다 호출된다.
    render() {
        //console.log(this.state);
        const { loading, testArray, progress,indeterminate,dataSource } = this.state;
        return (
            <MainPresenter
                loading={loading} testArray={testArray} progress={progress} indeterminate={indeterminate} dataSource={dataSource}
            />
        );
    }
}