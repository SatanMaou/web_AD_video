-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 23, 2022 lúc 07:04 PM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `sv_videos`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `videos`
--

CREATE TABLE `videos` (
  `ID` int(11) NOT NULL,
  `NameVideo` varchar(400) NOT NULL,
  `FakeName` varchar(200) NOT NULL,
  `size` int(11) NOT NULL,
  `ThoiLuong` int(11) NOT NULL,
  `sort` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `videos`
--

INSERT INTO `videos` (`ID`, `NameVideo`, `FakeName`, `size`, `ThoiLuong`, `sort`) VALUES
(25, 'y2mate.com - Tsundere Diona_1080pFHR.mp4', '1c928596ce254e5.mp4', 22969454, 62, 1),
(26, 'Du Ca Nương Nương Bị Bỏ Bùa Yêu.mp4', '3c5d8c569c91297.mp4', 10110471, 89, 4),
(27, 'Facehiufxhfxhfbook.mp4', 'c8d98abd9d467f2.mp4', 9254049, 17, 6),
(30, 'y2mate.com - Klees summer adventure plans  GENSHIN IMPACT_1080p.mp4', '84f46ba3f591406.mp4', 17289865, 45, 9),
(31, 'video_2928855307396395.mp4', 'abf7d411c4957cf.mp4', 3295918, 15, 1),
(32, 'Bé loli nhảy siu cute.mp4', '37bd2c53c4a68f5.mp4', 2269552, 12, 8),
(33, 'ポッチャマのアニメMVが公開されたポチャ - - 要チェックポチャ - @prj_pochama - -.mp4', '89a2b244c05755d.mp4', 1124029, 15, 7),
(34, 'Facebook.mp4', '31e0dbbfbe10910.mp4', 1809050, 24, 5);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `videos`
--
ALTER TABLE `videos`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
