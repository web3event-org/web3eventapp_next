interface Iprops {
   id:number
}
export default async function Getdate(props: Iprops) {
    const {id} = props;
    console.log(id);

    const res = await fetch('http://127.0.0.1:4523/m1/3962141-0-default/pet/43')

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()


}