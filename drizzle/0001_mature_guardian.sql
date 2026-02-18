CREATE TABLE `content` (
	`id` int AUTO_INCREMENT NOT NULL,
	`language` varchar(10) NOT NULL DEFAULT 'en',
	`key` varchar(255) NOT NULL,
	`value` text NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `content_id` PRIMARY KEY(`id`)
);
