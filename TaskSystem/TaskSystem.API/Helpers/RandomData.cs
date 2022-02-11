namespace TaskSystem.API.Helpers
{
    public static class RandomData
    {
        public static string GetRandomChars(int charsNumber)
        {
            string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            var stringChars = new char[charsNumber];
            Random random = new Random();

            for (int i = 0; i < stringChars.Length; i++)
            {
                stringChars[i] = chars[random.Next(chars.Length)];
            }

            string finalString = new String(stringChars);
            return finalString;
        }

        public static bool GetRandomBool()
        {
            Random random = new Random();
            if (random.Next(2) == 0) {
                return false;
            }
            return true;
        }

        public static string GetRandomName() 
        {
            Random random = new Random();
            List<string> names = new List<string> { "Mark", "Bohdan", "Daniil", "Iurii", "Marek", "Artem" };
            return names.ElementAt(random.Next(0, 6)); ;
        }
    }
}
