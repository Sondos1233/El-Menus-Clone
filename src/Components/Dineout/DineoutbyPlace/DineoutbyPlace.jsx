import 'bootstrap/dist/css/bootstrap.min.css';
import './../Dineout.css'
import { useEffect, useState } from 'react';
import { db } from './../../../Firebase/Firebase'
import { collection, collectionGroup, getDocs, limit, query, where } from 'firebase/firestore'

export default function DineoutbyPlace(props) {

    //QueryMood
    const [QueryByMood, setQueryByMood] = useState([]);

    const [clicked, setClicked] = useState(false);
    const filterByMood = (e) => {
        // console.logzz/
        setQueryByMood([])
        if (clicked == false) {
            const QueryByMoodDocs = query(
                collection(db, "Restaurant"),
                limit(10),
                where("Type", "array-contains", e.target.text)
            );

            const getResByMoodQuery = async () => {
                const QueryData = await getDocs(QueryByMoodDocs)
                // console.log(Branchesdata)
                setQueryByMood(QueryData.docs.map((doc) => ({ ...doc.data() })))
            }
            getResByMoodQuery()

            setClicked(true)
        }
        else {
            setClicked(false)
        }


    }

    return (
        <>
            <div class="col-md-4 col-6 my-1 px-1" style={{ minHeight: "100px", maxHeight: "400px" }}>
                <div class="d-flex px-0" style={{
                    borderRadius: "5px", height: "100%", backgroundImage: `url(${props.urlImage})`,
                    backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"
                }}>
                    <div class="dine-content2">
                        {/* "font-size: 20px; cursor: pointer;"  */}
                        <h1 class="mt-auto text-light fw-bold p-4" style={{ fontSize: "20px", cursor: "pointer" }} onClick={(e) => { filterByMood(e) }}>{props.title}</h1>
                    </div>
                </div>
            </div>

            {/* Filter By Mood */}
         
        </>
    );
}