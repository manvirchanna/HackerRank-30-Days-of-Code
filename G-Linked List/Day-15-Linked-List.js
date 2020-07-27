this.insert=function(head,data){
    let node = new Node(data);

if (!head) {
    head = node;
} else {
    let current = head;

    while (current.next != null) {
        current = current.next;
    }

    current.next = node;
}

return head;

};
