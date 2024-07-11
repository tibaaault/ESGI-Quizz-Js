-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : jeu. 11 juil. 2024 à 23:25
-- Version du serveur : 5.7.39
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `esgi-quizz-js`
--

-- --------------------------------------------------------

--
-- Structure de la table `Answer`
--

CREATE TABLE `Answer` (
  `id` int(11) NOT NULL,
  `libelle` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `statut` tinyint(1) NOT NULL,
  `questionId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `Answer`
--

INSERT INTO `Answer` (`id`, `libelle`, `statut`, `questionId`) VALUES
(1, 'Paris', 1, 2),
(2, 'Bruxelles', 0, 2),
(3, 'Berne', 0, 2),
(4, 'Madrid', 0, 2),
(5, 'Madrid', 1, 3),
(6, 'Budapest', 0, 3),
(7, 'Berlin', 0, 3),
(8, 'Athènes', 0, 3),
(9, 'Berne', 1, 1),
(10, 'Copenhague', 0, 1),
(11, 'Helsinki', 0, 1),
(12, 'Amsterdam', 0, 1),
(13, 'Minsk', 0, 4),
(14, 'Bruxelles', 1, 4),
(15, 'Paris', 0, 4),
(16, 'Rome', 0, 4),
(17, 'Berlin', 1, 5),
(18, 'Munich', 0, 5),
(19, 'Hambourg', 0, 5),
(20, 'Francfort', 0, 5),
(21, 'Rome', 1, 6),
(22, 'Milan', 0, 6),
(23, 'Naples', 0, 6),
(24, 'Turin', 0, 6),
(25, 'Londres', 1, 7),
(26, 'Manchester', 0, 7),
(27, 'Birmingham', 0, 7),
(28, 'Liverpool', 0, 7),
(29, 'Amsterdam', 1, 8),
(30, 'Rotterdam', 0, 8),
(31, 'La Haye', 0, 8),
(32, 'Utrecht', 0, 8),
(33, 'Stockholm', 1, 9),
(34, 'Göteborg', 0, 9),
(35, 'Malmö', 0, 9),
(36, 'Uppsala', 0, 9),
(37, 'Oslo', 1, 10),
(38, 'Bergen', 0, 10),
(39, 'Trondheim', 0, 10),
(40, 'Stavanger', 0, 10),
(41, 'Helsinki', 1, 11),
(42, 'Espoo', 0, 11),
(43, 'Tampere', 0, 11),
(44, 'Vantaa', 0, 11),
(45, 'Copenhague', 1, 12),
(46, 'Aarhus', 0, 12),
(47, 'Odense', 0, 12),
(48, 'Aalborg', 0, 12),
(49, 'Athènes', 1, 13),
(50, 'Thessalonique', 0, 13),
(51, 'Patras', 0, 13),
(52, 'Héraklion', 0, 13),
(53, 'Lisbonne', 1, 14),
(54, 'Porto', 0, 14),
(55, 'Braga', 0, 14),
(56, 'Coimbra', 0, 14),
(57, 'Vienne', 1, 15),
(58, 'Salzbourg', 0, 15),
(59, 'Graz', 0, 15),
(60, 'Innsbruck', 0, 15),
(61, 'Budapest', 1, 16),
(62, 'Debrecen', 0, 16),
(63, 'Szeged', 0, 16),
(64, 'Miskolc', 0, 16),
(65, '90 minutes', 1, 17),
(66, '80 minutes', 0, 17),
(67, '100 minutes', 0, 17),
(68, '70 minutes', 0, 17),
(69, '5 joueurs', 1, 18),
(70, '6 joueurs', 0, 18),
(71, '7 joueurs', 0, 18),
(72, '8 joueurs', 0, 18),
(73, '9 joueurs', 1, 19),
(74, '10 joueurs', 0, 19),
(75, '11 joueurs', 0, 19),
(76, '12 joueurs', 0, 19),
(77, '42.195 kilomètres', 1, 20),
(78, '40 kilomètres', 0, 20),
(79, '45 kilomètres', 0, 20),
(80, '50 kilomètres', 0, 20),
(81, '6 points', 1, 21),
(82, '5 points', 0, 21),
(83, '7 points', 0, 21),
(84, '8 points', 0, 21),
(85, 'Football', 1, 22),
(86, 'Basketball', 0, 22),
(87, 'Rugby', 0, 22),
(88, 'Baseball', 0, 22),
(89, '50 mètres', 1, 23),
(90, '25 mètres', 0, 23),
(91, '100 mètres', 0, 23),
(92, '75 mètres', 0, 23),
(93, '3 sets', 1, 24),
(94, '2 sets', 0, 24),
(95, '4 sets', 0, 24),
(96, '5 sets', 0, 24),
(97, 'France', 1, 25),
(98, 'Allemagne', 0, 25),
(99, 'Brésil', 0, 25),
(100, 'Espagne', 0, 25),
(101, '15 joueurs', 1, 26),
(102, '13 joueurs', 0, 26),
(103, '14 joueurs', 0, 26),
(104, '16 joueurs', 0, 26),
(105, 'Hockey sur glace', 1, 27),
(106, 'Basketball', 0, 27),
(107, 'Football', 0, 27),
(108, 'Lacrosse', 0, 27),
(109, '9 manches', 1, 28),
(110, '7 manches', 0, 28),
(111, '8 manches', 0, 28),
(112, '10 manches', 0, 28),
(113, 'Wimbledon', 1, 29),
(114, 'Roland Garros', 0, 29),
(115, 'US Open', 0, 29),
(116, 'Australian Open', 0, 29),
(117, '45.93 grammes', 1, 30),
(118, '50 grammes', 0, 30),
(119, '55 grammes', 0, 30),
(120, '60 grammes', 0, 30),
(121, '11 joueurs', 1, 31),
(122, '10 joueurs', 0, 31),
(123, '12 joueurs', 0, 31),
(124, '13 joueurs', 0, 31),
(125, 'George Washington', 1, 32),
(126, 'Thomas Jefferson', 0, 32),
(127, 'Abraham Lincoln', 0, 32),
(128, 'John Adams', 0, 32),
(129, '1789', 1, 33),
(130, '1776', 0, 33),
(131, '1804', 0, 33),
(132, '1792', 0, 33),
(133, 'Byzance', 1, 34),
(134, 'Troie', 0, 34),
(135, 'Alexandrie', 0, 34),
(136, 'Athènes', 0, 34),
(137, 'L’Empire carolingien', 1, 35),
(138, 'L’Empire romain', 0, 35),
(139, 'L’Empire byzantin', 0, 35),
(140, 'L’Empire ottoman', 0, 35),
(141, 'Léonard de Vinci', 1, 36),
(142, 'Michel-Ange', 0, 36),
(143, 'Raphaël', 0, 36),
(144, 'Donatello', 0, 36),
(145, 'L’invasion de la Pologne', 1, 37),
(146, 'L’attaque de Pearl Harbor', 0, 37),
(147, 'La bataille de Stalingrad', 0, 37),
(148, 'La chute de Berlin', 0, 37),
(149, 'Toutankhamon', 1, 38),
(150, 'Ramsès II', 0, 38),
(151, 'Cléopâtre', 0, 38),
(152, 'Akhenaton', 0, 38),
(153, 'Le traité de Versailles', 1, 39),
(154, 'Le traité de Paris', 0, 39),
(155, 'Le traité de Rome', 0, 39),
(156, 'Le traité de Trianon', 0, 39),
(157, 'Qin Shi Huang', 1, 40),
(158, 'Gengis Khan', 0, 40),
(159, 'Kublai Khan', 0, 40),
(160, 'Sun Tzu', 0, 40),
(161, 'Mayflower', 1, 41),
(162, 'Santa Maria', 0, 41),
(163, 'Endeavour', 0, 41),
(164, 'Victoria', 0, 41),
(165, 'Marie Curie', 1, 42),
(166, 'Rosalind Franklin', 0, 42),
(167, 'Ada Lovelace', 0, 42),
(168, 'Lise Meitner', 0, 42),
(169, '1969', 1, 43),
(170, '1965', 0, 43),
(171, '1972', 0, 43),
(172, '1961', 0, 43),
(173, 'Le mur de Berlin', 1, 44),
(174, 'Le mur de l’Atlantique', 0, 44),
(175, 'La ligne Maginot', 0, 44),
(176, 'Le rideau de fer', 0, 44),
(177, 'Henri VIII', 1, 45),
(178, 'Édouard VII', 0, 45),
(179, 'Richard III', 0, 45),
(180, 'Jacques I', 0, 45),
(181, 'Christophe Colomb', 1, 46),
(182, 'Vasco de Gama', 0, 46),
(183, 'Ferdinand Magellan', 0, 46),
(184, 'Amerigo Vespucci', 0, 46);

-- --------------------------------------------------------

--
-- Structure de la table `Category`
--

CREATE TABLE `Category` (
  `id` int(11) NOT NULL,
  `libelle` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `Category`
--

INSERT INTO `Category` (`id`, `libelle`) VALUES
(1, 'Sport'),
(3, 'Capitales'),
(4, 'Histoire');

-- --------------------------------------------------------

--
-- Structure de la table `Question`
--

CREATE TABLE `Question` (
  `id` int(11) NOT NULL,
  `libelle` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quizzId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `Question`
--

INSERT INTO `Question` (`id`, `libelle`, `quizzId`) VALUES
(1, 'Quelle est la capitale de la Suisse ? ', 2),
(2, 'Quelle est la capitale de la France', 2),
(3, 'Quelle est la capitale de l\'Espagne ?', 2),
(4, 'Quelle est la capitale de la Belgique', 2),
(5, 'Quelle est la capitale de l\'Allemagne ?', 2),
(6, 'Quelle est la capitale de l\'Italie ?', 2),
(7, 'Quelle est la capitale du Royaume-Uni ?', 2),
(8, 'Quelle est la capitale des Pays-Bas ?', 2),
(9, 'Quelle est la capitale de la Suède ?', 2),
(10, 'Quelle est la capitale de la Norvège ?', 2),
(11, 'Quelle est la capitale de la Finlande ?', 2),
(12, 'Quelle est la capitale du Danemark ?', 2),
(13, 'Quelle est la capitale de la Grèce ?', 2),
(14, 'Quelle est la capitale du Portugal ?', 2),
(15, 'Quelle est la capitale de l\'Autriche ?', 2),
(16, 'Quelle est la capitale de la Hongrie ?', 2),
(17, 'Quelle est la durée réglementaire d’un match de football ?', 4),
(18, 'Combien de joueurs composent une équipe de basketball ?', 4),
(19, 'Quel est le nombre de joueurs dans une équipe de baseball ?', 4),
(20, 'Quelle est la distance d’un marathon en kilomètres ?', 4),
(21, 'Combien de points vaut un touchdown au football américain ?', 4),
(22, 'Quel est le sport d’équipe le plus pratiqué au monde ?', 4),
(23, 'Quelle est la longueur d’une piscine olympique en mètres ?', 4),
(24, 'Combien de sets sont nécessaires pour gagner un match de tennis masculin en Grand Chelem ?', 4),
(25, 'Quel pays a remporté la Coupe du Monde de football en 2018 ?', 4),
(26, 'Combien de joueurs composent une équipe de rugby à XV ?', 4),
(27, 'Quel est le sport national du Canada ?', 4),
(28, 'Combien de manches composent un match de baseball professionnel ?', 4),
(29, 'Quel est le nom du tournoi de tennis le plus prestigieux sur gazon ?', 4),
(30, 'Quel est le poids d’une balle de golf en grammes ?', 4),
(31, 'Quel est le nombre de joueurs sur le terrain pour une équipe de cricket ?', 4),
(32, 'Qui a été le premier président des États-Unis ?', 5),
(33, 'En quelle année la Révolution française a-t-elle commencé ?', 5),
(34, 'Quel était le nom de la ville de Constantinople avant de devenir Istanbul ?', 5),
(35, 'Quel empire était dirigé par Charlemagne ?', 5),
(36, 'Qui a peint la fresque de la Cène ?', 5),
(37, 'Quel événement a marqué le début de la Seconde Guerre mondiale ?', 5),
(38, 'Quel pharaon égyptien a été enterré dans la vallée des rois ?', 5),
(39, 'Quel traité a mis fin à la Première Guerre mondiale ?', 5),
(40, 'Qui était le premier empereur de Chine ?', 5),
(41, 'Quel est le nom du navire sur lequel les pèlerins sont arrivés en Amérique en 1620 ?', 5),
(42, 'Qui a été la première femme à recevoir un prix Nobel ?', 5),
(43, 'En quelle année l’homme a-t-il marché sur la lune pour la première fois ?', 5),
(44, 'Quel mur a été démoli en 1989, marquant la fin de la guerre froide ?', 5),
(45, 'Quel roi anglais a eu six épouses ?', 5),
(46, 'Quel explorateur a découvert l’Amérique en 1492 ?', 5);

-- --------------------------------------------------------

--
-- Structure de la table `Quizz`
--

CREATE TABLE `Quizz` (
  `id` int(11) NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` int(11) NOT NULL,
  `created` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `categoryId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `Quizz`
--

INSERT INTO `Quizz` (`id`, `title`, `duration`, `created`, `categoryId`) VALUES
(2, 'Capitales Europe', 5, '2024-06-12 13:53:49.639', 3),
(4, 'Multi-sports', 5, '2024-06-25 22:05:10.000', 1),
(5, 'Histoire générale', 5, '2024-07-01 22:23:57.000', 4);

-- --------------------------------------------------------

--
-- Structure de la table `Stats`
--

CREATE TABLE `Stats` (
  `id` int(11) NOT NULL,
  `date` datetime(3) NOT NULL,
  `time` int(11) NOT NULL,
  `result` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `quizzId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `Stats`
--

INSERT INTO `Stats` (`id`, `date`, `time`, `result`, `userId`, `quizzId`) VALUES
(1, '2024-07-17 00:00:00.000', 0, 10, 1, 2),
(2, '2024-07-17 00:00:00.000', 0, 10, 1, 2),
(3, '2024-07-11 12:42:02.307', 0, 0, 5, 2),
(4, '2024-07-11 12:43:25.593', 0, 0, 5, 2),
(5, '2024-07-11 12:44:11.598', 0, 0, 5, 2),
(6, '2024-07-11 16:33:13.905', 0, 0, 5, 2),
(7, '2024-07-11 16:40:57.941', 0, 0, 5, 2),
(8, '2024-07-11 16:57:00.797', 0, 16, 5, 2),
(9, '2024-07-11 20:17:10.029', 0, 10, 5, 4),
(10, '2024-07-11 22:11:11.615', 0, 2, 3, 5),
(11, '2024-07-11 22:25:53.623', 0, 1, 3, 5),
(12, '2024-07-11 22:32:00.736', 0, 4, 3, 5),
(13, '2024-07-11 22:33:41.784', 0, 2, 3, 4),
(14, '2024-07-11 22:34:42.102', 0, 11, 3, 4),
(15, '2024-07-11 22:36:39.751', 0, 6, 3, 2),
(16, '2024-07-11 22:47:02.362', 0, 3, 3, 2),
(17, '2024-07-11 22:52:23.207', 0, 6, 7, 2);

-- --------------------------------------------------------

--
-- Structure de la table `User`
--

CREATE TABLE `User` (
  `id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `successRate` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `User`
--

INSERT INTO `User` (`id`, `name`, `password`, `role`, `successRate`) VALUES
(1, 'tibaaault', 'password123', 'user', NULL),
(2, 'test', 'password', 'USER', NULL),
(3, 'user', '$2b$10$VJh5Q6XHE/haTc50LKPdfO/EsOGIwPPAMmh/lGOMpzbN8mvId3z4m', 'USER', 0),
(4, 'user2', '$2b$10$XSENv4Culz4gZs033/5tZ.dsfGUI3k0hLzx0peKgXLMaW/2zc7yKq', 'USER', NULL),
(5, 'a', '$2b$10$RriBOoETbTDbOi0y/OePTemOHNfCFwPPzIRS2te4R0qHdNiMFtDmG', 'USER', NULL),
(6, 'Thibault', '$2b$10$CIXtZ.hkSiF9mwykigP46eWdDB2xfE3aDnatdXD.j9Pv41vmrNe.m', 'USER', NULL),
(7, 'try', '$2b$10$M2kz4CM29Zsz9ILynhzGBOOZjMbEJ8EhaYMTrw2kvucC1ZGRB9nHK', 'USER', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('48ffc059-8ddb-48d4-9927-6599acb680fb', '210bd9c86e099c5afa36373ed96cd729803116c7e8fd4a6a0ae4ee968c9c3b3a', '2024-07-11 20:51:18.042', '20240711205117_add_success_rate_to_user', NULL, NULL, '2024-07-11 20:51:17.977', 1),
('5193b0c7-9087-4f10-9088-a2cea15c4844', '1ce6faf64d7b51e70b427b032e2d7199a3f41cf2e7fc5ecd63f4b19799ae108c', '2024-06-11 13:24:45.479', '20240611132445_initial_migration', NULL, NULL, '2024-06-11 13:24:45.395', 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Answer`
--
ALTER TABLE `Answer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Answer_questionId_fkey` (`questionId`);

--
-- Index pour la table `Category`
--
ALTER TABLE `Category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Question`
--
ALTER TABLE `Question`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Question_quizzId_fkey` (`quizzId`);

--
-- Index pour la table `Quizz`
--
ALTER TABLE `Quizz`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Quizz_categoryId_fkey` (`categoryId`);

--
-- Index pour la table `Stats`
--
ALTER TABLE `Stats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Stats_userId_fkey` (`userId`),
  ADD KEY `Stats_quizzId_fkey` (`quizzId`);

--
-- Index pour la table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Answer`
--
ALTER TABLE `Answer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=185;

--
-- AUTO_INCREMENT pour la table `Category`
--
ALTER TABLE `Category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `Question`
--
ALTER TABLE `Question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT pour la table `Quizz`
--
ALTER TABLE `Quizz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `Stats`
--
ALTER TABLE `Stats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `User`
--
ALTER TABLE `User`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Answer`
--
ALTER TABLE `Answer`
  ADD CONSTRAINT `Answer_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `Question` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `Question`
--
ALTER TABLE `Question`
  ADD CONSTRAINT `Question_quizzId_fkey` FOREIGN KEY (`quizzId`) REFERENCES `Quizz` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `Quizz`
--
ALTER TABLE `Quizz`
  ADD CONSTRAINT `Quizz_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `Stats`
--
ALTER TABLE `Stats`
  ADD CONSTRAINT `Stats_quizzId_fkey` FOREIGN KEY (`quizzId`) REFERENCES `Quizz` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Stats_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
