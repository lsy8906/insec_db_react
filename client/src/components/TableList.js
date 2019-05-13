import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { trainingView } from '../apis/get'

export default class TableList extends Component {
    state = {

    }
    componentDidMount() {
        trainingView().then(res => console.log('', res.body))
        .catch(err => console.error('error =', err))
    }
    render() {
        const URL = this.props.match.path.split('/')[1]
        const TrainingList = () => (
            <tr>
                <th>날짜</th>
                <th>교육명</th>
                <th>수업 일수</th>
                <th>시간</th>
                <th>장소</th>
                <th></th>
            </tr>
        )
        
        const SeminarList = () => (
            <tr>
                <th>날짜</th>
                <th>세미나명</th>
                <th>발표자</th>
                <th>시간</th>
                <th>장소</th>
                <th></th>
            </tr>
        )

        return (
            <>
                <Link to={`/${URL}/new`} className="btn">추가</Link>
                <Link to={`/${URL}/edit`} className="btn">수정</Link>


                            <h2>{}</h2>
                            <table className="schedule">
                                <colgroup>
                                    <col style={{width: "20%"}} />
                                    <col style={{width: "40%"}} />
                                    <col style={{width: "12%"}} />
                                    <col style={{width: "12%"}} />
                                    <col style={{width: "12%"}} />
                                    <col style={{width: "4%"}} />
                                </colgroup>
                                <tbody>
                                    {
                                        URL === 'training' ? TrainingList() : SeminarList()
                                    }
                                </tbody>
                            </table>                                    

                        


            </>
        )
    }
}