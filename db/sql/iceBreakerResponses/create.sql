CREATE TABLE IF NOT EXISTS icebreaker_responses (
  id INTEGER PRIMARY KEY,
  icebreakerID INTEGER,
  questionID INTEGER,
  email TEXT,
  secret TEXT,
  response_text TEXT,
  response_url TEXT
)
