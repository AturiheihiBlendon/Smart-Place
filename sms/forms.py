from django import forms


class CreateSms(forms.Form):
    phone_number = forms.CharField(
                        label='phone number',
                        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'start with country code e.g +254xxx '}))  # noqa: E501
    message = forms.CharField(
                        label='message',
                        widget=forms.Textarea(attrs={"class": "form-control", "rows": 5, "cols": 20}))  # noqa: E501
