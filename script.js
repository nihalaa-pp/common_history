const allPhotos = [
{ location: 'thamarassery', src: 'images/njnj.avif', details: 'Details about Thamarassery Photo 1', year: 1800 },
{ location: 'thamarassery', src: 'images/hthh.avif', details: 'Details about Thamarassery Photo 2', year: 1801 },
{ location: 'mukkam', src: 'images/htht.avif', details: 'Details about Mukkam Photo 1', year: 1802 },
{ location: 'ponoor', src: 'images/jiji.avif', details: 'Details about Ponoor Photo 2', year: 1803 },
{ location: 'kannur', src: 'images/kiki.avif', details: 'Details about Kannur Photo 1', year: 1804 },
{ location: 'kannur', src: 'images/hthh.avif', details: 'Details about Kannur Photo 2', year: 1805 },
{ location: 'kozhikode', src: 'images/kk.jpg', details: 'Details about Kozhikode Photo 1', year: 1806 },
{ location: 'kozhikode', src: 'images/mk.jpg', details: 'Details about Kozhikode Photo 2', year: 1807 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 1', year: 1808 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 2', year: 1809 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 1', year: 1810 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 2', year: 1811 },
{ location: 'thamarassery', src: 'images/njnj.avif', details: 'Details about Thamarassery Photo 1', year: 1812 },
{ location: 'thamarassery', src: 'images/hthh.avif', details: 'Details about Thamarassery Photo 2', year: 1813 },
{ location: 'mukkam', src: 'images/htht.avif', details: 'Details about Mukkam Photo 1', year: 1814 },
{ location: 'ponoor', src: 'images/jiji.avif', details: 'Details about Ponoor Photo 2', year: 1815 },
{ location: 'kannur', src: 'images/kiki.avif', details: 'Details about Kannur Photo 1', year: 1816 },
{ location: 'kannur', src: 'images/hthh.avif', details: 'Details about Kannur Photo 2', year: 1817 },
{ location: 'kozhikode', src: 'images/kk.jpg', details: 'Details about Kozhikode Photo 1', year: 1818 },
{ location: 'kozhikode', src: 'images/mk.jpg', details: 'Details about Kozhikode Photo 2', year: 1819 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 1', year: 1820 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 2', year: 1821 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 1', year: 1822 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 2', year: 1823 },
{ location: 'thamarassery', src: 'images/njnj.avif', details: 'Details about Thamarassery Photo 1', year: 1824 },
{ location: 'thamarassery', src: 'images/hthh.avif', details: 'Details about Thamarassery Photo 2', year: 1825 },
{ location: 'mukkam', src: 'images/htht.avif', details: 'Details about Mukkam Photo 1', year: 1826 },
{ location: 'ponoor', src: 'images/jiji.avif', details: 'Details about Ponoor Photo 2', year: 1827 },
{ location: 'kannur', src: 'images/kiki.avif', details: 'Details about Kannur Photo 1', year: 1828 },
{ location: 'kannur', src: 'images/hthh.avif', details: 'Details about Kannur Photo 2', year: 1829 },
{ location: 'kozhikode', src: 'images/kk.jpg', details: 'Details about Kozhikode Photo 1', year: 1830 },
{ location: 'kozhikode', src: 'images/mk.jpg', details: 'Details about Kozhikode Photo 2', year: 1831 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 1', year: 1832 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 2', year: 1833 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 1', year: 1834 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 2', year: 1835 },
{ location: 'thamarassery', src: 'images/njnj.avif', details: 'Details about Thamarassery Photo 1', year: 1836 },
{ location: 'thamarassery', src: 'images/hthh.avif', details: 'Details about Thamarassery Photo 2', year: 1837 },
{ location: 'mukkam', src: 'images/htht.avif', details: 'Details about Mukkam Photo 1', year: 1838 },
{ location: 'ponoor', src: 'images/jiji.avif', details: 'Details about Ponoor Photo 2', year: 1839 },
{ location: 'kannur', src: 'images/kiki.avif', details: 'Details about Kannur Photo 1', year: 1840 },
{ location: 'kannur', src: 'images/hthh.avif', details: 'Details about Kannur Photo 2', year: 1841 },
{ location: 'kozhikode', src: 'images/kk.jpg', details: 'Details about Kozhikode Photo 1', year: 1842 },
{ location: 'kozhikode', src: 'images/mk.jpg', details: 'Details about Kozhikode Photo 2', year: 1843 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 1', year: 1844 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 2', year: 1845 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 1', year: 1846 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 2', year: 1847 },
{ location: 'thamarassery', src: 'images/njnj.avif', details: 'Details about Thamarassery Photo 1', year: 1848 },
{ location: 'thamarassery', src: 'images/hthh.avif', details: 'Details about Thamarassery Photo 2', year: 1849 },
{ location: 'mukkam', src: 'images/htht.avif', details: 'Details about Mukkam Photo 1', year: 1850 },
{ location: 'ponoor', src: 'images/jiji.avif', details: 'Details about Ponoor Photo 2', year: 1851 },
{ location: 'kannur', src: 'images/kiki.avif', details: 'Details about Kannur Photo 1', year: 1852 },
{ location: 'kannur', src: 'images/hthh.avif', details: 'Details about Kannur Photo 2', year: 1853 },
{ location: 'kozhikode', src: 'images/kk.jpg', details: 'Details about Kozhikode Photo 1', year: 1854 },
{ location: 'kozhikode', src: 'images/mk.jpg', details: 'Details about Kozhikode Photo 2', year: 1855 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 1', year: 1856 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 2', year: 1857 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 1', year: 1858 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 2', year: 1859 },
{ location: 'thamarassery', src: 'images/njnj.avif', details: 'Details about Thamarassery Photo 1', year: 1860 },
{ location: 'thamarassery', src: 'images/hthh.avif', details: 'Details about Thamarassery Photo 2', year: 1861 },
{ location: 'mukkam', src: 'images/htht.avif', details: 'Details about Mukkam Photo 1', year: 1862 },
{ location: 'ponoor', src: 'images/jiji.avif', details: 'Details about Ponoor Photo 2', year: 1863 },
{ location: 'kannur', src: 'images/kiki.avif', details: 'Details about Kannur Photo 1', year: 1864 },
{ location: 'kannur', src: 'images/hthh.avif', details: 'Details about Kannur Photo 2', year: 1865 },
{ location: 'kozhikode', src: 'images/kk.jpg', details: 'Details about Kozhikode Photo 1', year: 1866 },
{ location: 'kozhikode', src: 'images/mk.jpg', details: 'Details about Kozhikode Photo 2', year: 1867 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 1', year: 1868 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 2', year: 1869 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 1', year: 1870 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 2', year: 1871 },
{ location: 'thamarassery', src: 'images/njnj.avif', details: 'Details about Thamarassery Photo 1', year: 1872 },
{ location: 'thamarassery', src: 'images/hthh.avif', details: 'Details about Thamarassery Photo 2', year: 1873 },
{ location: 'mukkam', src: 'images/htht.avif', details: 'Details about Mukkam Photo 1', year: 1874 },
{ location: 'ponoor', src: 'images/jiji.avif', details: 'Details about Ponoor Photo 2', year: 1875 },
{ location: 'kannur', src: 'images/kiki.avif', details: 'Details about Kannur Photo 1', year: 1876 },
{ location: 'kannur', src: 'images/hthh.avif', details: 'Details about Kannur Photo 2', year: 1877 },
{ location: 'kozhikode', src: 'images/kk.jpg', details: 'Details about Kozhikode Photo 1', year: 1878 },
{ location: 'kozhikode', src: 'images/mk.jpg', details: 'Details about Kozhikode Photo 2', year: 1879 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 1', year: 1880 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 2', year: 1881 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 1', year: 1882 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 2', year: 1883 },
{ location: 'thamarassery', src: 'images/njnj.avif', details: 'Details about Thamarassery Photo 1', year: 1884 },
{ location: 'thamarassery', src: 'images/hthh.avif', details: 'Details about Thamarassery Photo 2', year: 1885 },
{ location: 'mukkam', src: 'images/htht.avif', details: 'Details about Mukkam Photo 1', year: 1886 },
{ location: 'ponoor', src: 'images/jiji.avif', details: 'Details about Ponoor Photo 2', year: 1887 },
{ location: 'kannur', src: 'images/kiki.avif', details: 'Details about Kannur Photo 1', year: 1888 },
{ location: 'kannur', src: 'images/hthh.avif', details: 'Details about Kannur Photo 2', year: 1889 },
{ location: 'kozhikode', src: 'images/kk.jpg', details: 'Details about Kozhikode Photo 1', year: 1890 },
{ location: 'kozhikode', src: 'images/mk.jpg', details: 'Details about Kozhikode Photo 2', year: 1891 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 1', year: 1892 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 2', year: 1893 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 1', year: 1894 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 2', year: 1895 },
{ location: 'thamarassery', src: 'images/njnj.avif', details: 'Details about Thamarassery Photo 1', year: 1896 },
{ location: 'thamarassery', src: 'images/hthh.avif', details: 'Details about Thamarassery Photo 2', year: 1897 },
{ location: 'mukkam', src: 'images/htht.avif', details: 'Details about Mukkam Photo 1', year: 1898 },
{ location: 'ponoor', src: 'images/jiji.avif', details: 'Details about Ponoor Photo 2', year: 1899 },
{ location: 'kannur', src: 'images/kiki.avif', details: 'Details about Kannur Photo 1', year: 1900 },
{ location: 'kannur', src: 'images/hthh.avif', details: 'Details about Kannur Photo 2', year: 1901 },
{ location: 'kozhikode', src: 'images/kk.jpg', details: 'Details about Kozhikode Photo 1', year: 1902 },
{ location: 'kozhikode', src: 'images/mk.jpg', details: 'Details about Kozhikode Photo 2', year: 1903 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 1', year: 1904 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 2', year: 1905 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 1', year: 1906 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 2', year: 1907 },
{ location: 'thamarassery', src: 'images/njnj.avif', details: 'Details about Thamarassery Photo 1', year: 1908 },
{ location: 'thamarassery', src: 'images/hthh.avif', details: 'Details about Thamarassery Photo 2', year: 1909 },
{ location: 'mukkam', src: 'images/htht.avif', details: 'Details about Mukkam Photo 1', year: 1910 },
{ location: 'ponoor', src: 'images/jiji.avif', details: 'Details about Ponoor Photo 2', year: 1911 },
{ location: 'kannur', src: 'images/kiki.avif', details: 'Details about Kannur Photo 1', year: 1912 },
{ location: 'kannur', src: 'images/hthh.avif', details: 'Details about Kannur Photo 2', year: 1913 },
{ location: 'kozhikode', src: 'images/kk.jpg', details: 'Details about Kozhikode Photo 1', year: 1914 },
{ location: 'kozhikode', src: 'images/mk.jpg', details: 'Details about Kozhikode Photo 2', year: 1915 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 1', year: 1916 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 2', year: 1917 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 1', year: 1918 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 2', year: 1919 },
{ location: 'thamarassery', src: 'images/njnj.avif', details: 'Details about Thamarassery Photo 1', year: 1920 },
{ location: 'thamarassery', src: 'images/hthh.avif', details: 'Details about Thamarassery Photo 2', year: 1921 },
{ location: 'mukkam', src: 'images/htht.avif', details: 'Details about Mukkam Photo 1', year: 1922 },
{ location: 'ponoor', src: 'images/jiji.avif', details: 'Details about Ponoor Photo 2', year: 1923 },
{ location: 'kannur', src: 'images/kiki.avif', details: 'Details about Kannur Photo 1', year: 1924 },
{ location: 'kannur', src: 'images/hthh.avif', details: 'Details about Kannur Photo 2', year: 1925 },
{ location: 'kozhikode', src: 'images/kk.jpg', details: 'Details about Kozhikode Photo 1', year: 1926 },
{ location: 'kozhikode', src: 'images/mk.jpg', details: 'Details about Kozhikode Photo 2', year: 1927 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 1', year: 1928 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 2', year: 1929 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 1', year: 1930 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 2', year: 1931 },
{ location: 'thamarassery', src: 'images/njnj.avif', details: 'Details about Thamarassery Photo 1', year: 1932 },
{ location: 'thamarassery', src: 'images/hthh.avif', details: 'Details about Thamarassery Photo 2', year: 1933 },
{ location: 'mukkam', src: 'images/htht.avif', details: 'Details about Mukkam Photo 1', year: 1934 },
{ location: 'ponoor', src: 'images/jiji.avif', details: 'Details about Ponoor Photo 2', year: 1935 },
{ location: 'kannur', src: 'images/kiki.avif', details: 'Details about Kannur Photo 1', year: 1936 },
{ location: 'kannur', src: 'images/hthh.avif', details: 'Details about Kannur Photo 2', year: 1937 },
{ location: 'kozhikode', src: 'images/kk.jpg', details: 'Details about Kozhikode Photo 1', year: 1938 },
{ location: 'kozhikode', src: 'images/mk.jpg', details: 'Details about Kozhikode Photo 2', year: 1939 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 1', year: 1940 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 2', year: 1941 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 1', year: 1942 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 2', year: 1943 },
{ location: 'thamarassery', src: 'images/njnj.avif', details: 'Details about Thamarassery Photo 1', year: 1944 },
{ location: 'thamarassery', src: 'images/hthh.avif', details: 'Details about Thamarassery Photo 2', year: 1945 },
{ location: 'mukkam', src: 'images/htht.avif', details: 'Details about Mukkam Photo 1', year: 1946 },
{ location: 'ponoor', src: 'images/jiji.avif', details: 'Details about Ponoor Photo 2', year: 1947 },
{ location: 'kannur', src: 'images/kiki.avif', details: 'Details about Kannur Photo 1', year: 1948 },
{ location: 'kannur', src: 'images/hthh.avif', details: 'Details about Kannur Photo 2', year: 1949 },
{ location: 'kozhikode', src: 'images/kk.jpg', details: 'Details about Kozhikode Photo 1', year: 1950 },
{ location: 'kozhikode', src: 'images/mk.jpg', details: 'Details about Kozhikode Photo 2', year: 1951 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 1', year: 1952 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 2', year: 1953 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 1', year: 1954 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 2', year: 1955 },
{ location: 'thamarassery', src: 'images/njnj.avif', details: 'Details about Thamarassery Photo 1', year: 1956 },
{ location: 'thamarassery', src: 'images/hthh.avif', details: 'Details about Thamarassery Photo 2', year: 1957 },
{ location: 'mukkam', src: 'images/htht.avif', details: 'Details about Mukkam Photo 1', year: 1958 },
{ location: 'ponoor', src: 'images/jiji.avif', details: 'Details about Ponoor Photo 2', year: 1959 },
{ location: 'kannur', src: 'images/kiki.avif', details: 'Details about Kannur Photo 1', year: 1960 },
{ location: 'kannur', src: 'images/hthh.avif', details: 'Details about Kannur Photo 2', year: 1961 },
{ location: 'kozhikode', src: 'images/kk.jpg', details: 'Details about Kozhikode Photo 1', year: 1962 },
{ location: 'kozhikode', src: 'images/mk.jpg', details: 'Details about Kozhikode Photo 2', year: 1963 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 1', year: 1964 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 2', year: 1965 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 1', year: 1966 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 2', year: 1967 },
{ location: 'thamarassery', src: 'images/njnj.avif', details: 'Details about Thamarassery Photo 1', year: 1968 },
{ location: 'thamarassery', src: 'images/hthh.avif', details: 'Details about Thamarassery Photo 2', year: 1969 },
{ location: 'mukkam', src: 'images/htht.avif', details: 'Details about Mukkam Photo 1', year: 1970 },
{ location: 'ponoor', src: 'images/jiji.avif', details: 'Details about Ponoor Photo 2', year: 1971 },
{ location: 'kannur', src: 'images/kiki.avif', details: 'Details about Kannur Photo 1', year: 1972 },
{ location: 'kannur', src: 'images/hthh.avif', details: 'Details about Kannur Photo 2', year: 1973 },
{ location: 'kozhikode', src: 'images/kk.jpg', details: 'Details about Kozhikode Photo 1', year: 1974 },
{ location: 'kozhikode', src: 'images/mk.jpg', details: 'Details about Kozhikode Photo 2', year: 1975 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 1', year: 1976 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 2', year: 1977 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 1', year: 1978 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 2', year: 1979 },
{ location: 'thamarassery', src: 'images/njnj.avif', details: 'Details about Thamarassery Photo 1', year: 1980 },
{ location: 'thamarassery', src: 'images/hthh.avif', details: 'Details about Thamarassery Photo 2', year: 1981 },
{ location: 'mukkam', src: 'images/htht.avif', details: 'Details about Mukkam Photo 1', year: 1982 },
{ location: 'ponoor', src: 'images/jiji.avif', details: 'Details about Ponoor Photo 2', year: 1983 },
{ location: 'kannur', src: 'images/kiki.avif', details: 'Details about Kannur Photo 1', year: 1984 },
{ location: 'kannur', src: 'images/hthh.avif', details: 'Details about Kannur Photo 2', year: 1985 },
{ location: 'kozhikode', src: 'images/kk.jpg', details: 'Details about Kozhikode Photo 1', year: 1986 },
{ location: 'kozhikode', src: 'images/mk.jpg', details: 'Details about Kozhikode Photo 2', year: 1987 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 1', year: 1988 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 2', year: 1989 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 1', year: 1990 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 2', year: 1991 },
{ location: 'thamarassery', src: 'images/njnj.avif', details: 'Details about Thamarassery Photo 1', year: 1992 },
{ location: 'thamarassery', src: 'images/hthh.avif', details: 'Details about Thamarassery Photo 2', year: 1993 },
{ location: 'mukkam', src: 'images/htht.avif', details: 'Details about Mukkam Photo 1', year: 1994 },
{ location: 'ponoor', src: 'images/jiji.avif', details: 'Details about Ponoor Photo 2', year: 1995 },
{ location: 'kannur', src: 'images/kiki.avif', details: 'Details about Kannur Photo 1', year: 1996 },
{ location: 'kannur', src: 'images/hthh.avif', details: 'Details about Kannur Photo 2', year: 1997 },
{ location: 'kozhikode', src: 'images/kk.jpg', details: 'Details about Kozhikode Photo 1', year: 1998 },
{ location: 'kozhikode', src: 'images/mk.jpg', details: 'Details about Kozhikode Photo 2', year: 1999 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 1', year: 2000 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 2', year: 2001 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 1', year: 2002 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 2', year: 2003 },
{ location: 'thamarassery', src: 'images/njnj.avif', details: 'Details about Thamarassery Photo 1', year: 2004 },
{ location: 'thamarassery', src: 'images/hthh.avif', details: 'Details about Thamarassery Photo 2', year: 2005 },
{ location: 'mukkam', src: 'images/htht.avif', details: 'Details about Mukkam Photo 1', year: 2006 },
{ location: 'ponoor', src: 'images/jiji.avif', details: 'Details about Ponoor Photo 2', year: 2007 },
{ location: 'kannur', src: 'images/kiki.avif', details: 'Details about Kannur Photo 1', year: 2008 },
{ location: 'kannur', src: 'images/hthh.avif', details: 'Details about Kannur Photo 2', year: 2009 },
{ location: 'kozhikode', src: 'images/kk.jpg', details: 'Details about Kozhikode Photo 1', year: 2010 },
{ location: 'kozhikode', src: 'images/mk.jpg', details: 'Details about Kozhikode Photo 2', year: 2011 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 1', year: 2012 },
{ location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 2', year: 2013 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 1', year: 2014 },
{ location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 2', year: 2015 },
{ location: 'thamarassery', src: 'images/njnj.avif', details: 'Details about Thamarassery Photo 1', year: 2016 },
{ location: 'thamarassery', src: 'images/hthh.avif', details: 'Details about Thamarassery Photo 2', year: 2017 },
{ location: 'mukkam', src: 'images/htht.avif', details: 'Details about Mukkam Photo 1', year: 2018 },
{ location: 'ponoor', src: 'images/jiji.avif', details: 'Details about Ponoor Photo 2', year: 2019 },
{ location: 'kannur', src: 'images/kiki.avif', details: 'Details about Kannur Photo 1', year: 2020 },
{ location: 'kannur', src: 'images/hthh.avif', details: 'Details about Kannur Photo 2', year: 2021 },
{ location: 'kozhikode', src: 'images/kk.jpg', details: 'Details about Kozhikode Photo 1', year: 2022 },
{ location: 'kozhikode', src: 'images/mk.jpg', details: 'Details about Kozhikode Photo 2', year: 2023 }
];


// Function to toggle the dropdown
function toggleDropdown() {
    document.getElementById("dropdownContent").classList.toggle("show");
}

// Function to display all photos on page load
function showAllPhotos() {
    const gallery = document.getElementById("photoGallery");
    gallery.innerHTML = ''; // Clear previous photos

    // Display all photos
    allPhotos.forEach(photo => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.onclick = function() { showDetails(this); };
        card.innerHTML = `
            <img src="${photo.src}" alt="Photo">
            <div class="photo-details">
                <button onclick="openSharePopup(event, '${photo.location}', '${photo.src}')">SHARE</button>
                <p>${photo.location.toUpperCase()}</p>
            </div>
            <div class="photo-info" style="display: none;">
                <p>${photo.details}</p>
            </div>
        `;
        gallery.appendChild(card);
    });
}

// Function to filter photos by location
function filterPhotos(location) {
    const gallery = document.getElementById("photoGallery");
    gallery.innerHTML = ''; // Clear previous photos

    const filteredPhotos = allPhotos.filter(photo => photo.location === location);
    filteredPhotos.forEach(photo => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.onclick = function() { showDetails(this); };
        card.innerHTML = `
            <img src="${photo.src}" alt="Photo">
            <div class="photo-details">
                <button onclick="openSharePopup(event, '${photo.location}', '${photo.src}')">SHARE</button>
                <p>${location.toUpperCase()}</p>
            </div>
            <div class="photo-info" style="display: none;">
                <p>${photo.details}</p>
            </div>
        `;
        gallery.appendChild(card);
    });
}

// Function to toggle details of a photo card
function showDetails(card) {
    card.classList.toggle("active");
    const photoInfo = card.querySelector('.photo-info');

    // Toggle display of the photo info
    if (card.classList.contains("active")) {
        photoInfo.style.display = 'block'; // Show details
    } else {
        photoInfo.style.display = 'none'; // Hide details
    }
}

// Function to open the share popup
function openSharePopup(event, location, src) {
    event.stopPropagation(); // Prevent the click from triggering card details toggle
    
    // Set photo information in the popup
    const popup = document.getElementById("sharePopup");
    popup.querySelector(".popup-title").textContent = `Share Photo from ${location}`;
    popup.querySelector(".popup-image").src = src;

    // Show the popup
    popup.style.display = "block";
}

// Function to close the share popup
function closeSharePopup() {
    document.getElementById("sharePopup").style.display = "none";
}

// Function to share on social media
function shareOnSocialMedia(platform) {
    const popup = document.getElementById("sharePopup");
    const imgSrc = popup.querySelector(".popup-image").src;
    
    // Handle sharing logic for each platform
    let shareUrl;
    if (platform === 'facebook') {
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(imgSrc)}`;
    } else if (platform === 'whatsapp') {
        // WhatsApp sharing link, sharing text with image URL
        const message = `Check out this photo: ${imgSrc}`;
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    } else if (platform === 'twitter') {
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(imgSrc)}`;
    } else if (platform === 'print') {
        window.print(); // Keep this to maintain print functionality
        return; // Exit to avoid opening a share URL for print
    } else {
        // If an unsupported platform is selected, return early
        return;
    }

    // Open the share URL in a new window/tab
    window.open(shareUrl, '_blank');
    closeSharePopup();
}

// Load all photos on page load
document.addEventListener("DOMContentLoaded", showAllPhotos);

// Function to search for photos
function searchPhotos() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const gallery = document.getElementById("photoGallery");
    gallery.innerHTML = ''; // Clear previous photos

    const filteredPhotos = allPhotos.filter(photo => 
        photo.location.toLowerCase().includes(filter) || 
        photo.details.toLowerCase().includes(filter)
    );

    filteredPhotos.forEach(photo => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.onclick = function() { showDetails(this); };
        card.innerHTML = `
            <img src="${photo.src}" alt="Photo">
            <div class="photo-details">
                <button onclick="openSharePopup(event, '${photo.location}', '${photo.src}')">SHARE</button>
                <p>${photo.location.toUpperCase()}</p>
            </div>
            <div class="photo-info" style="display: none;">
                <p>${photo.details}</p>
            </div>
        `;
        gallery.appendChild(card);
    });

    if (filteredPhotos.length === 0) {
        gallery.innerHTML = `<p>No results found for "${input.value}"</p>`;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const timelineArrow = document.getElementById('timeline-arrow');
    const timeline = document.querySelector('.timeline-progress');

    timeline.addEventListener('mousemove', (e) => {
        const timelineRect = timeline.getBoundingClientRect();
        const offsetX = e.clientX - timelineRect.left;
        const percentage = Math.min(Math.max(offsetX / timelineRect.width, 0), 1); // Clamp value between 0 and 1

        // Update the arrow position
        timelineArrow.style.left = `${percentage * 100}%`;

        // Calculate the year dynamically
        const year = Math.floor(1800 + ((2050 - 1800) * percentage));
        timelineArrow.textContent = year;

        // Filter and display photos for the selected year
        const filteredPhotos = allPhotos.filter(photo => photo.year === year);
        displayPhotos(filteredPhotos);
    });
});

// Load all photos on page load
window.onload = showAllPhotos;


function displayPhotos(photos) {
    const gallery = document.getElementById("photoGallery");
    gallery.innerHTML = ''; // Clear previous photos

    photos.forEach(photo => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.onclick = function() { showDetails(this); };
        card.innerHTML = `
            <img src="${photo.src}" alt="Photo">
            <div class="photo-details">
                <button onclick="openSharePopup(event, '${photo.location}', '${photo.src}')">SHARE</button>
                <p>${photo.location.toUpperCase()}</p>
            </div>
            <div class="photo-info" style="display: none;">
                <p>${photo.details}</p>
            </div>
        `;
        gallery.appendChild(card);
    });

    if (photos.length === 0) {
        gallery.innerHTML = `<p>No photos available for the selected year ${year}.</p>`;
    }
}
