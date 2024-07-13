export interface IPost {
  id: string
  createdAt: string 
  side: "ME"|"OPPOSITE"
  text: string
  user:string
}
