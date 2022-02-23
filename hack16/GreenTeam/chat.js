function buildChatHtml()
{
    var container = document.getElementById('chat');

    var chatHtml = `
        <div class="chat_header">
            Bid chat - current $<span id="bid_option" class="bid_option">0</span>m
        </div>
        <div id="chat_body" class="chat_body">
            <div id="chat_converse" class="chat_conversion chat_converse">
                <span class="chat_msg_item chat_msg_item_admin">Hey there! What is your bid?</span>
            </div>
        </div>
    `;

    container.innerHTML = chatHtml;
}

function createBidMessage(country, bid, message)
{
    var chatBody = document.getElementById('chat_converse');
    chatBody.innerHTML = `<span class="chat_msg_item chat_msg_item_user">${country}; Bid ${bid} ${message}</span>${chatBody.innerHTML}`;

    if(bid>0) {
        document.getElementById('bid_option').innerHTML = bid;
    }
}