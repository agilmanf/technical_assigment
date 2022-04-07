CREATE DATABASE skilvulmusicstream;
USE skilvulmusicstream;

CREATE TABLE users(
	id INT,
	name VARCHAR(32),
	email VARCHAR(32),
	password VARCHAR(32),
	PRIMARY KEY (id)
);

CREATE TABLE playlists(
	id INT,
	user_id INT,
	PRIMARY KEY (id),
	CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE singers(
	id INT,
	name VARCHAR(32),
	PRIMARY KEY (id)
);

CREATE TABLE albums(
	id INT,
	name VARCHAR(64),
    singer_id INT,
	PRIMARY KEY (id),
    CONSTRAINT fk_singer_id FOREIGN KEY (singer_id) REFERENCES singers(id)
    
);

CREATE TABLE tracks(
	id INT,
	title VARCHAR(64),
    singer_id INT,
    album_id INT,
	PRIMARY KEY (id),
    CONSTRAINT fk_tracks_singer_id FOREIGN KEY (singer_id) REFERENCES singers(id),
    CONSTRAINT fk_album_id FOREIGN KEY (album_id) REFERENCES albums(id)
    
);

CREATE TABLE playlists_detail(
	playlist_id INT NOT NULL,
    track_id INT NOT NULL,
    CONSTRAINT fk_playlist_id FOREIGN KEY (playlist_id) REFERENCES playlists(id),
    CONSTRAINT fk_track_id FOREIGN KEY (track_id) REFERENCES tracks(id)
);