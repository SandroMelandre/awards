create table award.participants(
    id serial primary key,
    participant_name text not null,
    email text not null,
    phone text not null,
    document_type text not null,
    document_number text not null,
    participant_password text not null
)