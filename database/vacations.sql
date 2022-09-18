-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 17, 2022 at 10:04 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vacations`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(55) COLLATE utf8mb4_bin NOT NULL,
  `last_name` varchar(55) COLLATE utf8mb4_bin NOT NULL,
  `user_name` varchar(55) COLLATE utf8mb4_bin NOT NULL,
  `password` varchar(32) COLLATE utf8mb4_bin NOT NULL,
  `is_admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `user_name`, `password`, `is_admin`) VALUES
(1, 'lea', 'levi', 'lealevi@78', 'lele7856', 0),
(2, 'sara', 'amar', 'samar99', 'sa45mar', 0),
(3, 'avraham', 'cohen', 'avcohen10', 'ac1456', 0),
(4, 'rachel', 'vin', 'vinrac41', '9865rachel', 0),
(5, 'chaim', 'beni', 'chbn78', '12345ch', 0),
(6, 'osnat', 'dayan', 'osdayan', 'osda123', 1),
(9, 'Hadassa', 'Dayan', 'HaDa180', '123456HD', 0),
(12, 'daniel', 'noy', 'danny', 'dn45', 0),
(13, 'meir', 'levi', 'mlpo56', '56ml', 0),
(14, '', '', '', '', 0),
(17, 'lea', 'levi', 'jhi@78', '5743', 0),
(22, 'os', 'os', 'aa', 'aa', 0),
(23, 'ea', 'li', 'j', '53', 0),
(25, 'חיה', 'לול', 'bb', 'bb', 0);

-- --------------------------------------------------------

--
-- Table structure for table `vacation`
--

CREATE TABLE `vacation` (
  `id` int(11) NOT NULL,
  `descriprion` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `destination` varchar(250) COLLATE utf8mb4_bin NOT NULL,
  `picture` varchar(250) COLLATE utf8mb4_bin NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `price` int(11) NOT NULL,
  `followers` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `vacation`
--

INSERT INTO `vacation` (`id`, `descriprion`, `destination`, `picture`, `start_date`, `end_date`, `price`, `followers`) VALUES
(1, 'Dubai is the most populous city in the United Arab Emirates and the capital of the Emirate of Dubai', 'Dubai', 'dubai.jpg', '2023-07-11', '2022-07-17', 2500, 0),
(3, 'Venice is a city in northeastern Italy and the capital of the Veneto region. ', 'Venice', 'venice.jpg', '2023-07-20', '2030-07-20', 1800, 1),
(4, 'Cyprus officially the Republic of Cyprus, is an island country in the eastern Mediterranean Sea south of the Anatolian Peninsula. \r\n', 'Cyprus', 'cyprus.jpg', '2028-10-22', '2031-10-22', 1000, 0),
(5, 'Prague is a political, cultural, and economic hub of central Europe, with a rich history and Romanesque, Gothic, Renaissance and Baroque architecture', 'Prague', 'prague.jpg', '2022-06-13', '2022-06-18', 2350, 1),
(6, 'Romania is the twelfth-largest country in Europe and the sixth-most populous member state of the European Union. Its capital and largest city is Bucharest.', 'Romania', 'romania.jpg', '2022-06-17', '2022-06-11', 3000, 0),
(7, 'Thailand historically known as Siam and officially the Kingdom of Thailand, is a country in Southeast Asia, located at the centre of Mainland Southeast Asia.', 'Thailand', 'thailand.jpg', '2022-10-07', '2022-10-20', 5000, 0),
(8, 'Barcelona is a city on the coast of northeastern Spain. It is the capital and largest city of the autonomous community of Catalonia.', 'Barcelona', 'barcelona.jpg', '2022-08-04', '2022-08-10', 1850, 0),
(9, 'Tokyo formerly Edo, historically Tokio, and officially the Tokyo Metropolis is the capital and largest city of Japan.', 'Tokyo', 'tokyo.jpg', '2023-01-01', '2023-01-05', 4400, 0),
(10, 'Paris is the capital and most populous city of France.', 'Paris', 'paris.jpg', '2022-06-08', '2022-06-15', 5700, 0),
(11, 'London is the capital and largest city of England and the United Kingdom.', 'London', 'london.jpg', '2022-07-14', '2022-07-22', 4000, 0),
(12, 'It lies southwest of Sri Lanka and India.', 'Maldives', 'maldives.jpg', '2022-10-17', '2022-10-23', 6000, 0),
(13, 'Italy is located in the middle of the Mediterranean Sea, in Southern Europe; it is also considered part of Western Europe.', 'Italy', 'italy.jpg', '2022-08-03', '2022-08-08', 3000, 0),
(14, 'The Philippines officially the Republic of the Philippines (Filipino: Republika ng Pilipinas), is an archipelagic country in Southeast Asia.', 'Philippines', 'philippins.jpg', '2022-09-09', '2022-09-13', 4900, 0),
(15, 'Japan is an island country in East Asia. It is situated in the northwest Pacific Ocean, and is bordered on the west by the Sea of Japan.', 'Japan', 'japan.jpg', '2022-09-01', '2022-09-10', 4500, 1),
(16, 'Israel defines itself as a Jewish and democratic state, and as the nation-state of the Jewish people.', 'Israel', 'israel.jpg', '2022-11-20', '2022-11-27', 3500, 0),
(19, 'Cape Town is one of South Africa\'s three capital cities, serving as the seat of the Parliament of South Africa.   ', 'Cape Town', 'cape-town.jpg', '2022-07-01', '2022-07-06', 4500, 0),
(39, 'example', 'just example', 'dubai.jpg', '2022-07-15', '2022-07-19', 9500, 0);

-- --------------------------------------------------------

--
-- Table structure for table `vacations_followers`
--

CREATE TABLE `vacations_followers` (
  `user_id` int(11) NOT NULL,
  `vacation_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `vacations_followers`
--

INSERT INTO `vacations_followers` (`user_id`, `vacation_id`) VALUES
(1, 5),
(5, 3),
(5, 15);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_name` (`user_name`);

--
-- Indexes for table `vacation`
--
ALTER TABLE `vacation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vacations_followers`
--
ALTER TABLE `vacations_followers`
  ADD PRIMARY KEY (`user_id`,`vacation_id`),
  ADD KEY `from vacations to vacation_follower` (`vacation_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `vacation`
--
ALTER TABLE `vacation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `vacations_followers`
--
ALTER TABLE `vacations_followers`
  ADD CONSTRAINT `from user to  vacation_follower` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `from vacations to vacation_follower` FOREIGN KEY (`vacation_id`) REFERENCES `vacation` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
