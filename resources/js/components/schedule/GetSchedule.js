import React,{useState,useEffect} from 'react';
import axios from 'axios';

function GetSchedule(props){
    const userid = props;
    //スケジュールのデータ
    const [schedules,setSche] = useState([])

    //画面読み込み時に、1度だけ起動
    useEffect(()=>{
        getPostData();
    },[])

    //バックエンドからデータ一覧を取得
    const getPostData = () =>{
        axios
        .post('/api/posts')
        .then(response=>{
            setSche(response.data); //バックエンドからのデータでスケジュールを更新
            console.log(response.data); //確認用ログ
        }).catch(()=>{
            console.log('通信に失敗しました');
        });
    }

    //データ格納の空配列を作成
    let rows = [];

    //スケジュールデータをrowに格納する
    schedules.map((post)=>
        rows.push({
            sch_id:post.id,
            sch_category:post.sch_category,
            sch_contents:post.sch_contents,
            sch_date:post.sch_date,
            sch_time:post.sch_time
        })
    );

    return rows
}


export default GetSchedule;