export default function ({ store, redirect }) {
    const auth=localStorage.getItem('token') 
  if (!auth && (auth === null || auth === undefined)) {
    // return redirect('/login')
  }
}
