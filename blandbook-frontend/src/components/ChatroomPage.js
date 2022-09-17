//This page connects the ActionCable in Rails with the
//Front end

//Acknolwedgements to this tutorial:
//https://javascript.plainenglish.io/building-a-simple-live-chat-in-react-with-action-cable-8c2abf7a25b5

import {useEffect, useRef, useState } from "react"
import { useParams } from "react-router"
import { createConsumer } from "@rails/actioncable"


function ChatroomPage({ loggedInUser }) {
    const [messages, setMessages] = useState([])
    const params = useParams()

        useEffect(() => {

            //createConsumer creates a connection to the backend, using a route that is found in the ActionCable in Rails. It uses a WebSocket to do this.
            cable = createConsumer("ws://localhost:3000/cable")


            //Below we are creating a package of data to send acrtoss the connection formed above. It contained the channel we are going to subscribe to and the instance id.

            const paramsToSend = {
                channel: "ChatroomChannel",
                id: params.id
            }


            //These handlers are callback functions taht will run when either:
            //Recieved() --> new data has come back
            // Connected()==> on initial connection
            // disconnected --> at end of session


            const handlers = {
                received( data ) {
                    setMessages([...messages, data])
            },
            

            connected() {
                console.log('Chatroom connected');
            },

            disconnected() {
                console.log('Disconnected');
            }

        } //end handlers
            

        //Below we need to create a subscriptions to the cable
        //created above, and pass in the params and handlers

        const subscription = cable.subscription.create(paramsToSend, handlers)

        return function cleanup() {
            console.log('Unsubbing from', params.id)
            subscription.unsubscribe()
        }

    }, [params.id, messages]) //end use Effect


}  //end ChatroomPage