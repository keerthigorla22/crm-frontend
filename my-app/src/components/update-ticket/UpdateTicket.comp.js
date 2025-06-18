import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const UpdateTicket = () => {
  const [message, setMessage] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState(null);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const trimmed = message.trim();
    if (!trimmed) return;

    // Simulate reply logic
    const msgObj = {
      sender: "Operator",
      message: trimmed,
      msgAt: new Date().toISOString(),
    };

    // This example only stores it locally
    setSubmittedMessage(msgObj);
    setMessage("");
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="replyTextArea">
          <Form.Label><strong>Reply</strong></Form.Label>
          <Form.Text className="text-muted d-block mb-2">
            Please reply with your message or update the ticket.
          </Form.Text>
          <Form.Control
            as="textarea"
            rows={5}
            value={message}
            onChange={handleOnChange}
            placeholder="Type your message here..."
          />
        </Form.Group>
        <div className="text-end mt-3">
          <Button type="submit" variant="primary" disabled={!message.trim()}>
            Reply
          </Button>
        </div>
      </Form>

      {/* Displaying the submitted message locally (optional) */}
      {submittedMessage && (
        <div className="mt-4 p-3 border rounded bg-light">
          <div><strong>{submittedMessage.sender}</strong></div>
          <div>{new Date(submittedMessage.msgAt).toLocaleString()}</div>
          <div className="mt-2">{submittedMessage.message}</div>
        </div>
      )}
    </div>
  );
};
